using System;
using System.Collections;
using System.Collections.Generic;
using Puerts;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

namespace UnityPen
{ 
    public class TemplateUI : MonoBehaviour
    {
        private JsEnv env;
        public TMP_InputField field;
        public Button evalBtn;
        public Button clear;


        private void Awake()
        {
            env = new JsEnv();
            this.evalBtn.onClick.AddListener(OnClickEval);
            this.clear.onClick.AddListener(OnClickClear);
            field.onSubmit.AddListener(x =>
            {
                OnClickEval();
                field.text = null;
            });
        }

        void OnClickClear()
        {
            env = new JsEnv();
            field.text = "console.log(\"hello world!\")";
        }

        void OnClickEval()
        {
            env.Eval(field.text);
            field.text = null;
        }
    }
}