
let rotate = 30;


class Cube {  
  /**
   * @param {CS.UnityPen.Scripts.JavascriptBehaviour} self
   */
  constructor(self) { 
    this.self = self;  
    this.self.JsStart = () => this.onStart();    
    this.self.JsUpdate = () => this.onUpdate();  
  }
 
  onStart() { 
  }

  onUpdate() {  
    this.self.transform.Rotate(new CS.UnityEngine.Vector3(rotate, 0, 0));
    this.self.transform.Rotate(new CS.UnityEngine.Vector3(rotate, rotate, 0));
    this.self.transform.Rotate(new CS.UnityEngine.Vector3(rotate, 0, 0)); 
  }
}

export function init(self) {
  var cube = new Cube(self);
}
