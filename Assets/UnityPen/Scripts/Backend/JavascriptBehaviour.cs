using System;
using System.Reflection;
using Puerts;
using UnityEngine;
using UnityPen;

namespace UnityPen
{
    public delegate void ModuleInit(JavascriptBehaviour monoBehaviour);

    public class DefaultOrMemoryLoader : ILoader, IModuleChecker
    {
        private string root = "";
        private string code = "";

        public DefaultOrMemoryLoader()
        {
        }

        public DefaultOrMemoryLoader(string code)
        {
            this.code = code;
        }

        private string PathToUse(string filepath)
        {
            return
                // .cjs asset is only supported in unity2018+
#if UNITY_2018_1_OR_NEWER
                filepath.EndsWith(".cjs") || filepath.EndsWith(".mjs")
                    ? filepath.Substring(0, filepath.Length - 4)
                    :
#endif
                    filepath;
        }


        public bool FileExists(string filepath)
        {
#if PUERTS_GENERAL
            return File.Exists(Path.Combine(root, filepath));
#else 
            string pathToUse = this.PathToUse(filepath);
            bool exist = UnityEngine.Resources.Load(pathToUse) != null;
#if !PUERTS_GENERAL && UNITY_EDITOR && !UNITY_2018_1_OR_NEWER
            if (!exist) 
            {
                UnityEngine.Debug.LogWarning("【Puerts】unity 2018- is using, if you found some js is not exist, rename *.cjs,*.mjs in the resources dir with *.cjs.txt,*.mjs.txt");
            }
#endif
            return exist;
#endif
        }

        public string ReadFile(string filepath, out string debugpath)
        { 
#if PUERTS_GENERAL
            debugpath = Path.Combine(root, filepath);
            return File.ReadAllText(debugpath);
#else 
            string pathToUse = this.PathToUse(filepath);
            UnityEngine.TextAsset file = (UnityEngine.TextAsset)UnityEngine.Resources.Load(pathToUse);
            
            debugpath = System.IO.Path.Combine(root, filepath);
#if UNITY_EDITOR_WIN || UNITY_STANDALONE_WIN
            debugpath = debugpath.Replace("/", "\\");
#endif
            Debug.Log(code);
            Debug.Log(debugpath);
            return file == null ? null : file.text;
#endif
        }


        public bool IsESM(string filepath)
        {
            return filepath.Length >= 4 && filepath.EndsWith(".mjs");
        }
    }
}

public class JavascriptBehaviour : MonoBehaviour
{
    [Multiline]
    public string code;
    private JsEnv env;
    public Action JsStart;
    public Action JsUpdate;
    public Action JsOnDestroy;
    private static int debugPort = 8500;

    void Awake()
    {
        var loader = new DefaultLoader();
        env = new JsEnv(loader, debugPort);

 
        // 파일을 불러온후 export된 init함수를 가져와 호출한다.
        var init = env.Eval<ModuleInit>(code);
        if (init != null)
            init(this); // js -> C# binding  
    }

    public void Eval(string code)
    {
        // 모듈을 불러온다.
        var loader = new DefaultLoader();
        var newEnv = new JsEnv(loader, debugPort);
        ModuleInit init = null;
        try
        {
            // 모듈을 평가한다.
            init = newEnv.Eval<ModuleInit>(code); 
            // 기존 env는 지운다.
            if (env != null)
            {
                env.Dispose();
                env = null;
                this.JsStart = null;
                this.JsUpdate = null;
                this.JsOnDestroy = null;
            }  
        }
        catch (Exception e)
        {
            Debug.LogError(e);
        }
        finally
        {
            // 모듈이 문제없으면 초기화한다.
            if (init != null)
            { 
                init(this);
            }
        }
    
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