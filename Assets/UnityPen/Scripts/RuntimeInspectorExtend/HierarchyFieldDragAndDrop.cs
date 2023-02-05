using System;
using System.Collections.Generic;
using System.Linq;
using RuntimeInspectorNamespace;
using UnityEngine;
using UnityEngine.EventSystems;

namespace UnityPen.Scripts
{
    public class HierarchyFieldDragAndDrop : MonoBehaviour, IDragHandler, IBeginDragHandler, IEndDragHandler
    {
        private HierarchyField hierarchyField = null;
        private void Awake()
        {
            this.hierarchyField = GetComponent<HierarchyField>();
        } 
        private bool FilterHierarchyField(RaycastResult item)
        {
            if (item.gameObject.transform.parent == null) 
                return false;
            var component = item.gameObject.transform.parent.GetComponent<HierarchyField>();
            if (component != null)
            {
                if (component != this.hierarchyField)
                {
                    return true;
                }
            }  
            return false;
        }

        public void OnEndDrag(PointerEventData eventData)
        {
            List<RaycastResult> results = new List<RaycastResult>();
            EventSystem.current.RaycastAll(eventData, results);
            var foundGameObject = results.Where(FilterHierarchyField).FirstOrDefault(); 
            if (foundGameObject.gameObject != null)
            { 
                var field = foundGameObject.gameObject.transform.parent.GetComponent<HierarchyField>(); 
                if (field != null)
                { 
                    this.hierarchyField.Data.BoundTransform.SetParent(field.Data.BoundTransform, false);
                }
            }
        }
        public void OnDrag(PointerEventData eventData)
        {
        
        }

        public void OnBeginDrag(PointerEventData eventData)
        {
             
        }
    }
}