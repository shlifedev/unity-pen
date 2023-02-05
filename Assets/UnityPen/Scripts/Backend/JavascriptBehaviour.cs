using System;
using Puerts;
using UnityEngine;

namespace UnityPen.Scripts
{    
    public delegate void ModuleInit(JavascriptBehaviour monoBehaviour);
    public class JavascriptBehaviour : MonoBehaviour
    {
        public string fileName;
        private JsEnv env;
        public Action JsStart;
        public Action JsUpdate;
        public Action JsOnDestroy;
        private static int debugPort = 8500;
        void Awake()
        {
            env = new JsEnv(new DefaultLoader(), debugPort);
            // 파일을 불러온후 export된 init함수를 가져와 호출한다.
            var init = env.ExecuteModule<ModuleInit>(fileName, "init");
            if (init != null)
                init(this);  // js -> C# binding 
        }

        private void Start()
        {
            if (JsStart != null) JsStart();
        }

        private void Update()
        {
            if (JsUpdate != null) JsUpdate();
        }
    }
}