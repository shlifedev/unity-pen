using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using SharpFileSystem;
using SharpFileSystem.FileSystems;
using SharpFileSystem.IO;
using UnityEngine;

namespace UnityPen
{  
    [HIdeInRuntimeHierarchy]
    public class FileSystemManager : MonoBehaviour
    {
        public FileSystemPath Assets => FileSystemPath.Root.AppendDirectory("Assets");
        public static MemoryFileSystem FileSystem;
        private void Awake()
        {
            DontDestroyOnLoad(this.gameObject); 
            FileSystem = new MemoryFileSystem();
            FileSystem.CreateDirectory(Assets); 
            var stream = FileSystem.CreateFile(Assets.AppendFile("_.mjs"));
            foreach (var entities in FileSystem.GetEntities(Assets))
            {
                Debug.Log(entities.EntityName);
            } 
        }
    }
}