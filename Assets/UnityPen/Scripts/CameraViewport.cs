using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Serialization;
using UnityEngine.UI;

public class CameraViewport : MonoBehaviour
{
    [FormerlySerializedAs("canvas")] public CanvasScaler scaler;
    public RectTransform viewportRelativeRect; 
    private Camera cam;

    private void Awake()
    {
        cam ??= GetComponent<Camera>(); 
    }

    // Update is called once per frame
    void Update()
    {
        var width = viewportRelativeRect.sizeDelta.x;  
        var refWidth = scaler.referenceResolution.x;
        var subRelativeRect = refWidth - width; 
        var widthRatio = subRelativeRect / refWidth; 
        
        var newPos = cam.rect.position;
        var newSize = cam.rect.size;
            newSize.x = widthRatio;
        
        cam.rect = new Rect(newPos,  newSize); 
    }
    
    
}
