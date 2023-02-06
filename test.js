let rotate = 0;


function onStart() {
   let a = 20;
   let b = 30;
   Log("Hi I want a+b! " , a + b);
}

function onUpdate() { 
   rotate += Time.deltaTime;
   self.transform.rotation = Quaternion.Euler(rotate*90, rotate*30, rotate*45);
   self.transform.position = new Vector3(Mathf.Sin(Time.realtimeSinceStartup * 2), 0, Mathf.Cos(Time.realtimeSinceStartup  * 2));
}