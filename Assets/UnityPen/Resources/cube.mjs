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
    // 기본적으로 CS.UnityEngine.Vector3 으로접근
    this.self.transform.Rotate(
      new CS.UnityEngine.Vector3(rotate * CS.UnityEngine.Time.deltaTime, 0, 0)
    );
    this.self.transform.position = new Vector3(
      Mathf.Sin(Time.realtimeSinceStartup),
      0,
      0
    );
  }
}

export function init(self) {
  var cube = new Cube(self);
}
