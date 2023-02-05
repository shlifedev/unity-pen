using System;
using System.Collections.Generic;
using Puerts;
using UnityEngine;
#if UNITY_EDITOR
[Configure]
public class ExamplesCfg
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
                typeof(UnityEngine.Debug),
                typeof(UnityEngine.Vector3),
                typeof(UnityEngine.Quaternion),
                typeof(UnityEngine.GameObject),
                typeof(UnityEngine.Transform),
                typeof(UnityEngine.Random),
                typeof(UnityEngine.Mathf),
            };
        }
    }
}
#endif