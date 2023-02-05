using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using Esprima;
using Esprima.Ast;
using Esprima.Utils;
using Puerts;
using UnityEngine;
using UnityPen;

public class AstVisitorSyntaxHighlight : AstVisitor
{
    public override void Visit(Node node)
    {
        base.Visit(node);
        if (node.Type == Nodes.VariableDeclaration)
        {
            var n = node as VariableDeclaration; 
             
        }
        Debug.Log($"{node.ChildNodes.Count} ${node.Type} ${node.Location.Start} ${node.Location.End} ${node.Range.Start} ${node.Range.End}");
    }
}
public class MultilineText : MonoBehaviour
{
    public TMPro.TMP_InputField field;  
    private StringBuilder sb;
    private Coroutine current;
    public IEnumerator Eval(string text)
    {
        yield return new WaitForSeconds(.5f);
        GameObject.Find("TestCube").GetComponent<JavascriptBehaviour>().Eval(text); 
    }
    void Start()
    {
        
        sb = new StringBuilder(field.text); 
        UpdateSyntaxHighlight(); 
        field.onValueChanged.AddListener(x =>
        {
            
            if(current != null)
                StopCoroutine(current);
            current = StartCoroutine(this.Eval(x)); 
        });
    }

 
    void UpdateSyntaxHighlight()
    {      
        var parser = new JavaScriptParser(field.text, new ParserOptions()
        {
            Tokens = true,   
        });  
        var module = parser.ParseModule();   
        var visitor = new AstVisitorSyntaxHighlight();
        visitor.Visit(module);
        // string[] lines = field.text.Split(
        //     new string[] { Environment.NewLine },
        //     StringSplitOptions.None);
        //
        // foreach (var body in module.Body)
        // {
        //     Visit(body, (node) =>
        //     {  
        //         var syntaxHighlight = "<color=yellow>";
        //         var syntaxHlLength = syntaxHighlight.Length;
        //         var start = node.Location.Start;
        //         var end = node.Location.End;
        //
        //         if (start.Line == end.Line)
        //         {
        //             sb = new StringBuilder(lines[start.Line]);
        //             if (node.Type == Nodes.VariableDeclarator)
        //             {  
        //                 sb.Insert(start.Column, syntaxHighlight); 
        //                 sb.Insert(end.Column, "</color>");   
        //             }  
        //             Debug.Log(sb.ToString());
        //         } 
        //     });
        // }
        //
    }
 
    void Visit(Node node, Action<Node> func)
    {
        if (node == null) 
            return;  
        func?.Invoke(node);
        foreach(var n in node.ChildNodes)
            Visit(n, func);
    } 
}
