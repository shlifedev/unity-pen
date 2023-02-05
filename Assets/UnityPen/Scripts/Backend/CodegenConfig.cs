using System;
using System.Collections.Generic;
using Puerts;
using UnityEngine;
using UnityPen.Scripts;

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
                typeof(Debug), 
                typeof(Vector3),
                typeof(List<int>),
                typeof(Dictionary<string, List<int>>),
                typeof(Time),
                typeof(Transform),
                typeof(Component),
                typeof(GameObject),
                typeof(UnityEngine.Object),
                typeof(Delegate),
                typeof(System.Object),
                typeof(System.Array),
                typeof(Type),
                typeof(ParticleSystem),
                typeof(Canvas),
                typeof(RenderMode),
                typeof(Behaviour),
                typeof(MonoBehaviour), 
                typeof(JavascriptBehaviour), 
                typeof(UnityEngine.EventSystems.UIBehaviour), 
                typeof(UnityEngine.UI.Selectable),
                typeof(UnityEngine.UI.Button),
                typeof(UnityEngine.UI.Button.ButtonClickedEvent),
                typeof(UnityEngine.Events.UnityEvent),
                typeof(UnityEngine.UI.InputField),
                typeof(UnityEngine.UI.Toggle),
                typeof(UnityEngine.UI.Toggle.ToggleEvent),
                typeof(UnityEngine.Events.UnityEvent<bool>),
            };
        }
    }
    
    [BlittableCopy]
    static IEnumerable<Type> Blittables
    {
        get
        {
            return new List<Type>()
            {
                //打开这个可以优化Vector3的GC，但需要开启unsafe编译
                //typeof(Vector3),
            };
        }
    }
    
    [Filter]
    static bool FilterMethods(System.Reflection.MemberInfo mb)
    {
        // 排除 MonoBehaviour.runInEditMode, 在 Editor 环境下可用发布后不存在
        if (mb.DeclaringType == typeof(MonoBehaviour) && mb.Name == "runInEditMode") {
            return true;
        }
        if (mb.DeclaringType == typeof(Type) && (mb.Name == "MakeGenericSignatureType" || mb.Name == "IsCollectible")) {
            return true;
        }
        if (mb.DeclaringType == typeof(System.IO.File)) {
            if (mb.Name == "SetAccessControl" || mb.Name == "GetAccessControl") {
                return true;

            } else if (mb.Name == "Create") {
                return true;
            }
        }
        return false;
    }
}
#endif