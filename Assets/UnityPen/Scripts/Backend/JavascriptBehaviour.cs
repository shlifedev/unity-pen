using System;
using System.Collections.Generic;
using System.Reflection;
using Jint;
using Jint.Native;
using Jint.Runtime.Interop;
using Jint.Runtime.References;
using Unity.Mathematics;
using Unity.VisualScripting;
using UnityEditorInternal.VersionControl;
using UnityEngine;
using UnityPen;
using Object = System.Object;

namespace UnityPen
{
    public interface IType
    {
        string GetTypeName();
    }
    
    public class WrappedGameObject : IType
    {
        public GameObject value; 
        public WrappedGameObject()
        {
            this.value = new GameObject();
        }

 
        public static void Destroy(JsValue value)
        { 
             
        }
      
        public string GetTypeName()
        {
            return "GameObject";
        }
    }

    public class JavascriptBehaviour : MonoBehaviour
    { 
        [Multiline] public string code;
        private Jint.Engine engine; 
        
        public JsValue JsUpdate;
        public JsValue JsStart;
        public JsValue JSOnChanged; 
        private List<int> asad = new List<int>();
        private bool initialized = false;
        void UpdateEngineContext(string code, bool contextClear = true )
        {
            if (contextClear) 
                initialized = false;
            if (initialized == false )
            {
                try
                {
                    if (JSOnChanged != null && JSOnChanged.IsUndefined() == false && JSOnChanged.IsNull() == false)
                    {  
                        JSOnChanged?.Invoke();
                    }
                }
                catch(Exception e)
                {
                    Debug.LogError(e);
                }     
                engine = new Engine(cfg =>
                {
                    cfg.AllowClr(typeof(GameObject).Assembly);
                }); 
                engine.SetValue("TestObject", typeof(WrappedGameObject));
                engine.SetValue(nameof(Debug.Log), new Action<object>(Debug.Log));
                engine.SetValue(nameof(Mathf), typeof(Mathf));
                engine.SetValue(nameof(Vector3), typeof(Vector3));
                engine.SetValue(nameof(Quaternion), typeof(Quaternion));
                engine.SetValue(nameof(Transform), typeof(Transform));
                engine.SetValue(nameof(Time), typeof(Time));
                engine.SetValue(nameof(UnityEngine.Object), typeof(UnityEngine.Object));
                engine.SetValue(nameof(GameObject), typeof(GameObject)); 
                
                
                engine.SetValue("ListOfGameObject", typeof(List<GameObject>));
                engine.SetValue("ListOfInt", typeof(List<int>));
                engine.SetValue("ListOfFloat", typeof(List<float>));
                engine.SetValue("ListOfVector3", typeof(List<Vector3>)); 
                engine.SetValue(nameof(Dictionary<string, string>), typeof(Dictionary<string, string>));
                engine.SetValue(nameof(Dictionary<int, string>), typeof(Dictionary<int, int>));
                engine.SetValue(nameof(System.Object), typeof(System.Object));
                engine.SetValue(nameof(System.Array), typeof(System.Array));
                engine.SetValue(nameof(PrimitiveType), typeof(PrimitiveType));
                engine.SetValue("self", (this as object));
                engine.Execute(code); 
                JsBindTo(engine, "onStart", ref JsStart, true);
                JsBindTo(engine, "onUpdate", ref JsUpdate, true);
                JsBindTo(engine, "onChanged", ref JSOnChanged, false);  
                initialized = true;
            }  
        }
 
        void JsBindTo(Engine context, string fnName, ref JsValue value, bool invoke = false)
        {
            
            if(context == null) return;
            
            var fn = context.GetValue(fnName);
            if (fn == null)
                return;
            if (!fn.IsNull() && !fn.IsUndefined()) 
                value = fn;
            if (invoke)
            {
                try
                {
                    value?.Invoke();
                }
                catch(Exception e)
                {
                    Debug.LogError(e);
                }
            }
        }
        void Awake()
        {
            GameObject.CreatePrimitive(PrimitiveType.Cube);
            
            UpdateEngineContext(this.code);
        }


        public void Eval(string code)
        { 
            UpdateEngineContext(code); 
        }

        private void Start()
        { 
            if (JsStart != null)
                JsStart.Invoke();
        }

        private void Update()
        {
            if (JsUpdate != null)
                JsUpdate.Invoke();
        }
    }
}