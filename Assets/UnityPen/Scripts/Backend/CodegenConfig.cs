//
// #if UNITY_EDITOR
// using System;
// using System.Collections.Generic;
// using Puerts;
// using UnityEngine;
// using UnityPen.Scripts;
//
// namespace UnityPen.Editor
// {
//
//  
//     [Configure]
//     public class ExamplesCfg
//     {
//         [Binding]
//         static IEnumerable<Type> Bindings
//         {
//             get
//             {
//                 return new List<Type>()
//                 {
//                     typeof(Debug),
//                     typeof(Vector3),
//                     typeof(Quaternion),
//                     typeof(List<int>),
//                     typeof(Dictionary<string, List<int>>),
//                     typeof(Time),
//                     typeof(Transform),
//                     typeof(Component),
//                     typeof(GameObject),
//                     typeof(UnityEngine.Object),
//                     typeof(Delegate),
//                     typeof(System.Object),
//                     typeof(System.Array),
//                     typeof(Type),
//                     typeof(ParticleSystem),
//                     typeof(Mathf),
//                     typeof(Canvas),
//                     typeof(RenderMode),
//                     typeof(Behaviour),
//                     typeof(MonoBehaviour),
//                     typeof(JavascriptBehaviour),
//                     typeof(UnityEngine.EventSystems.UIBehaviour),
//                     typeof(UnityEngine.UI.Selectable),
//                     typeof(UnityEngine.UI.Image),
//                     typeof(UnityEngine.UI.Button),
//                     typeof(UnityEngine.UI.Button.ButtonClickedEvent),
//                     typeof(UnityEngine.Events.UnityEvent),
//                     typeof(UnityEngine.UI.InputField),
//                     typeof(UnityEngine.UI.Toggle),
//                     typeof(UnityEngine.UI.Toggle.ToggleEvent),
//                     typeof(UnityEngine.Events.UnityEvent<bool>),
//                 };
//             }
//         }
//
//         /// <summary>
//         /// ????????? ???????????? ???????????? GC ???????????? ????????????.
//         /// ?????? unsafe ???????????? ????????????????????? ??????????????? ???????????? ?????? ??? ??????.
//         /// </summary>
//         [BlittableCopy]
//         static IEnumerable<Type> Blittables
//         {
//             get
//             {
//                 return new List<Type>()
//                 {
//                     typeof(Vector3),
//                     typeof(Quaternion)
//                 };
//             }
//         }
//
//         [Filter]
//         static bool FilterMethods(System.Reflection.MemberInfo mb)
//         {
//             // ?????? MonoBehaviour.runInEditMode, ??? Editor ?????????????????????????????????
//             if (mb.DeclaringType == typeof(MonoBehaviour) && mb.Name == "runInEditMode")
//             {
//                 return true;
//             }
//
//             if (mb.DeclaringType == typeof(Type) &&
//                 (mb.Name == "MakeGenericSignatureType" || mb.Name == "IsCollectible"))
//             {
//                 return true;
//             }
//
//             if (mb.DeclaringType == typeof(System.IO.File))
//             {
//                 if (mb.Name == "SetAccessControl" || mb.Name == "GetAccessControl")
//                 {
//                     return true;
//
//                 }
//                 else if (mb.Name == "Create")
//                 {
//                     return true;
//                 }
//             }
//
//             return false;
//         }
//     }
// }
// #endif