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
    console.log('love');
  }
  onUpdate() { 
    console.log('love2');
  }
}

export function init(self) {
  var cube = new Cube(self);
}
