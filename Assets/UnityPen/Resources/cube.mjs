const rotate = 30; 
const Vector3 = CS.UnityEngine.Vector3;
const Mathf = CS.UnityEngine.Mathf;
const Time = CS.UnityEngine.Time;
class Cube {
  /**
   * @param {CS.UnityPen.Scripts.JavascriptBehaviour} self
   */
  constructor(self) {
    this.self = self;
    this.self.JsStart = () => this.onStart();
    this.self.JsUpdate = () => this.onUpdate();
  }

  onStart() {}

  onUpdate() {  
    this.self.transform.Rotate(new CS.UnityEngine.Vector3(rotate * CS.UnityEngine.Time.deltaTime, 0, 0));   
    this.self.transform.position = new Vector3(Mathf.Sin(Time.realtimeSinceStartup), 0, 0);
  }
}

(function(self) {
  new Cube(self);
}) 