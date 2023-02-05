using System;
using UnityEngine;

namespace UnityPen.Scripts.Test
{
    public class VirtualGameObject : MonoBehaviour
    {
        private Puerts.JsEnv env;
        [Multiline]
        public string evalString = null;

        private void OnGUI()
        {
            if (GUILayout.Button("Eval"))
            {
                env.Eval(evalString);
            }
        }

        void Awake()
        {
            env = new Puerts.JsEnv(); 
                
        }
    }
}