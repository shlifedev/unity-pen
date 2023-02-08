using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection; 
using UnityEngine;
using XLua;

 
public class LuaBehaviour : MonoBehaviour
{
    private static LuaEnv engine = new ();
    [Multiline]
    public string code; 
    private Action m_update;
    private Action m_initialize; 
    private LuaTable scriptEnv; 

    private void InitializeMetaTable()
    {
        
    }
    private void Awake()
    {     
        this.scriptEnv ??= engine.NewTable();
        // 메타테이블 생성
        LuaTable meta = engine.NewTable();
        meta.Set("__index", engine.Global); 
        this.scriptEnv.SetMetaTable(meta);
        scriptEnv.Set("self", this); 
        meta.Dispose();    
        StartCoroutine(CollectGc());  
    }
 

    public IEnumerator CollectGc()
    { 
        while (true)
        {
            yield return new WaitForSeconds(1);
            engine.Tick();
        }
    }

    public void Eval(string code)
    { 
        try
        {
            // next env에서 코드를 평가한다.
            engine.DoString(code, "", scriptEnv); 
            scriptEnv.Get("update", out m_update); 
            // init의 경우는 스크립트 변경시에만 호출된다.
            scriptEnv.Get("init", out m_initialize);
            m_initialize?.Invoke();
        }
        catch (Exception e)
        { 
            Debug.LogError(e);
        }  
    }
    

    private void OnDestroy()
    {
        this.scriptEnv.Dispose();
    }

 

    private void Update()
    {
        if (m_update != null)
        {
            m_update();
        } 
    } 
}
