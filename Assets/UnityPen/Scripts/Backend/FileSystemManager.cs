using System;
using System.IO;
using System.Text;
using SharpFileSystem;
using SharpFileSystem.FileSystems;
using SharpFileSystem.IO;
using UnityEngine;

namespace UnityPen.Scripts
{ 
    [HIdeInRuntimeHierarchy]
    public class FileSystemManager : MonoBehaviour
    {
        public FileSystemPath Assets => FileSystemPath.Root;
        public static MemoryFileSystem FileSystem;
        private void Awake()
        {
            DontDestroyOnLoad(this.gameObject);
            FileSystem = new MemoryFileSystem(); 
            var stream = FileSystem.CreateFile(Assets);
            stream.Write(Encoding.UTF8.GetBytes(@$"
const a = 20;
const b = 30;
console.log(a+b);
"));

            stream.Close();
            var open = FileSystem.OpenFile(Assets.AppendFile("_.js"), FileAccess.ReadWrite);
            Debug.Log(Encoding.UTF8.GetString(open.ReadAllBytes()));
        }
    }
}