using System.Collections.Generic;

namespace UnityPen.Scripts.VirtualFileSystem
{
    public class VirtualDirectory : global::VirtualFileSystem
    {
        public List<VirtualDirectory> subDirectories = new List<VirtualDirectory>();
        
    }
}