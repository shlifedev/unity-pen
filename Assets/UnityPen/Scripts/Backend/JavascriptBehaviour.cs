using System;
using System.Reflection;
using Jint;
using Jint.Native;
using Unity.Mathematics;
using UnityEngine;
using UnityPen;

namespace UnityPen
{

    class ASD
    {
        public void Log()
        {
            Debug.Log("ZZ");
        }
    }
    public class JavascriptBehaviour : MonoBehaviour
    {
        [Multiline] public string code;
        private Jint.Engine engine; 
        
        public JsValue JsUpdate;
        public JsValue JSStart;


        void UpdateEngineContext(string code)
        {
            engine = new Engine(cfg =>
            {
                cfg.AllowClr(typeof(Vector3).Assembly);
                cfg.AllowClr(typeof(GameObject).Assembly); 
            });      
            // 값의 설정은 미리한다.
            engine.SetValue(nameof(Debug.Log), new Action<object>(Debug.Log)); 
            engine.SetValue(nameof(Mathf), typeof(Mathf));
            engine.SetValue(nameof(Vector3), typeof(Vector3));
            engine.SetValue(nameof(GameObject), typeof(GameObject));  
            engine.SetValue(nameof(Quaternion), typeof(Quaternion));  
            engine.SetValue(nameof(Transform), typeof(Transform));  
            engine.SetValue(nameof(Time), typeof(Time));  
            engine.SetValue("self", (this as object));  
            engine.Execute(code); 
            // 가져오는것은 Execute 후.
            this.JsUpdate = engine.GetValue("onUpdate");
            this.JSStart = engine.GetValue("onStart");


            this.transform.rotation = Quaternion.Euler(1,1,1);
            
        }
        void Awake()
        {
            UpdateEngineContext(this.code);
        }


        public void Eval(string code)
        {
            UpdateEngineContext(code); 
        }

        private void Start()
        {
            if (JSStart != null)
                JSStart.Invoke();
        }

        private void Update()
        {
            if (JsUpdate != null)
                JsUpdate.Invoke();
        }
    }
}