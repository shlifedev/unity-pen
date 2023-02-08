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
    private Action m_awake;
    private LuaTable scriptEnv;
    public bool mark;

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
        // 생성 후 C# 메타테이블은 필요없음. 메모리에서 해제해준다. 
        meta.Dispose();   
        
        UpdateScriptEngineContext(); 
        StartCoroutine(UpdateContextOnSecond());
        StartCoroutine(GC());
        
        m_awake?.Invoke();
    }

    public IEnumerator UpdateContextOnSecond()
    {
        while (true)
        {
            yield return new WaitForSeconds(1);
            mark = true;  
        }

        yield return null;
    }

    public IEnumerator GC()
    {
        while (true)
        {
            yield return new WaitForSeconds(1);
            engine.Tick();
        }
    }

    private void UpdateScriptEngineContext()
    {   
        // 코드를 평가한다. 
        engine.DoString(this.code, "", this.scriptEnv); 
        scriptEnv.Get("update", out m_update);
        // 이것은 awake와 다르게 동작한다. 왜냐하면 awake는 단 한번만 동작하고
        // init의 경우는 스크립트 변경시에만 호출된다.
        scriptEnv.Get("init", out m_initialize);
        scriptEnv.Get("awake", out m_awake);
    }
    

    private void OnDestroy()
    {
        this.scriptEnv.Dispose();
    }

    private void LateUpdate()
    { 
        if (mark)
        {
            engine.DoString(code);
            UpdateScriptEngineContext();
            mark = false;
        }
    }

    private void Update()
    {
        if (m_update != null)
        {
            m_update();
        } 
    }
 
    
    private void OnGUI()
    {
        if (GUILayout.Button("Do"))
        {
            mark = true; 
        }
    }
}
