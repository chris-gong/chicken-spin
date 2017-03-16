
var textMesh : TextMesh;
var cameraMain : Camera;
var gameObj1 : GameObject;
var gameObj2 : GameObject;
var skyboxMat : Material;
function Start(){
  
}
 
function Update(){ 
 for(var i:int = 0; i < Input.touches.Length; i++)//How many touches do we have?
     {
     	
         var touch:Touch = Input.touches[i];//The touch
         //instead of cameraMain, it could also be Camera.main but since I had
         //to recreate the scene a new camera was made while the old main camera died
         var ray:Ray = cameraMain.ScreenPointToRay(touch.position);
         var hit:RaycastHit = new RaycastHit();
  
         if(Physics.Raycast(ray,hit, 1000))
         {
          
             if(hit.collider.gameObject == textMesh.GetComponent.<Collider>().gameObject)
             {  
             textMesh.text = "Loading...";
                 switch(touch.phase)
                 { 
                     case TouchPhase.Began://if the touch begins
                       
    				   
                       Destroy(GameObject.Find("Scene1"));
                       Instantiate(gameObj2);
        				RenderSettings.skybox = skyboxMat;
         				RenderSettings.ambientIntensity = 0.256;
         				RenderSettings.reflectionIntensity = 0.635;
                        
                       Resources.UnloadUnusedAssets();
                       
                       
                     break;
                  } 
             }
          }

         } 
          
}
function destroyScene(){
         Destroy(GameObject.Find("Scene1"));
         Instantiate(gameObj2);
         RenderSettings.skybox = skyboxMat;
         RenderSettings.ambientIntensity = 0.256;
         RenderSettings.reflectionIntensity = 0.635;
}