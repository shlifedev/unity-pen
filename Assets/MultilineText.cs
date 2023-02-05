using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using Esprima;
using Esprima.Ast;
using Puerts;
using UnityEngine;

public class MultilineText : MonoBehaviour
{
    public TMPro.TMP_InputField field; 
    private JavaScriptParser parser;
    private StringBuilder sb;
    void Start()
    {
        sb = new StringBuilder(field.text);
        parser = new JavaScriptParser(field.text, new ParserOptions()
        {
            Tokens = true,
            
        }); 
        var parse = parser.ParseModule();
        Visit(parse, (node) =>
        {
            Debug.Log(node.ToString());
            Debug.Log($"Range : {node.Range.Start} {node.Range.End} Source => {node.Location.Source}");
            Debug.Log($"Location : {node.Location.Start} {node.Location.End} Source => {node.Location.Source}");
            Debug.Log($"Type : {node.Type}");
        });
    }

    void Visit(Node node, Action<Node> func)
    {
        if (node == null) 
            return; 

        func?.Invoke(node);
        foreach(var n in node.ChildNodes)
            Visit(n, func);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
