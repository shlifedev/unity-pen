using UnityEngine;
using UnityEngine.EventSystems;

namespace UnityPen
{
    namespace UnityPen.Scripts.Playground.UI
    {
        public class UIDragArea : MonoBehaviour, IDragHandler, IEndDragHandler
        {
            public RectTransform target;

            public void OnDrag(PointerEventData eventData)
            {

            }

            public void OnEndDrag(PointerEventData eventData)
            {
            }
        }
    }
}