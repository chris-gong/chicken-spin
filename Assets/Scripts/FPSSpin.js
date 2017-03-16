#pragma strict
 
@script RequireComponent(CharacterController)

var spinCounter : TextMesh;

var targetItem : GameObject;
var GUICamera : Camera;
var ambient : GameObject;

var rotationRate : float;


private var wasRotating;

private var rotationCount : int = 0;
private var scrollPosition : Vector2 = Vector2.zero;
private var scrollVelocity : float = 0;
private var timeTouchPhaseEnded: float;
private var inertiaDuration: float = 0.25f;

private var itemInertiaDuration : float = 0.5f;
private var itemTimeTouchPhaseEnded : float;
private var rotateVelocityX : float = 0;
private var rotateVelocityY : float = 0;

var hit: RaycastHit;

private var layerMask = (1 << 8) | (1 << 2);

function Start () {
layerMask =~ layerMask;

}

function Update () {
if(Input.touchCount > 0){
var theTouch : Touch = Input.GetTouch(0);
var ray = Camera.main.ScreenPointToRay(theTouch.position);
if(Physics.Raycast(ray,hit,50,layerMask)){

if(Input.touchCount == 1){
if(theTouch.phase == TouchPhase.Began)
{
wasRotating = false;
}
if(theTouch.phase == TouchPhase.Moved){
//-theTouch.deltaPosition.x * rotationRate
targetItem.transform.Rotate(theTouch.deltaPosition.y * rotationRate, 0 ,0,Space.World);
wasRotating = true;
rotationCount += parseInt(Mathf.Abs(theTouch.deltaPosition.y * rotationRate));
spinCounter.text = (rotationCount/360).ToString();
  
}
}
if (theTouch.phase == TouchPhase.Ended || theTouch.phase == TouchPhase.Canceled){
if(wasRotating == true){
if(Mathf.Abs(theTouch.deltaPosition.x)>-5){
rotateVelocityX = theTouch.deltaPosition.x/theTouch.deltaTime;}
if(Mathf.Abs(theTouch.deltaPosition.y)>-5){
rotateVelocityY = theTouch.deltaPosition.y/theTouch.deltaTime;}
itemTimeTouchPhaseEnded = Time.time;}

}
}
if(Input.touchCount == 0){
if(scrollVelocity!=0.0){
var t:float = (Time.time - timeTouchPhaseEnded) - inertiaDuration;
var frameVelocity : float = Mathf.Lerp(scrollVelocity,0,t);
scrollPosition.x = frameVelocity*Time.deltaTime;
if(t>-inertiaDuration){
scrollVelocity = 0.0f;}
} 
}
if(rotateVelocityX!=0.0f || rotateVelocityY!= 0.0f){

var ty:float = (Time.time - itemTimeTouchPhaseEnded)/itemInertiaDuration;
var XVelocity : float = Mathf.Lerp(rotateVelocityX,0,ty);
var YVelocity : float = Mathf.Lerp(rotateVelocityY,0,ty);
if(ty>-inertiaDuration){
rotateVelocityX = 0.0f;
rotateVelocityY = 0.0f;}
//-XVelocity*Time.deltaTime*rotationRate
targetItem.transform.Rotate(YVelocity *Time.deltaTime*rotationRate, 0,0,Space.World);

}
}
}
