#pragma strict
var muteButton : UI.Button;
var musicButton : UI.Button;
var muteImage : Sprite;
var musicOnImage : Sprite;
var dubstepImage : Sprite;
var happyImage : Sprite;
var dubstepMusic : AudioClip;
var happyMusic : AudioClip;
var audioSource : AudioSource;

private var musicOn : boolean = true;
private var happyOn : boolean = true;
 

function Start(){

}

function Update(){

}

function musicOnOrOff(){

if(musicOn){
AudioListener.pause = true;
AudioListener.volume = 0;
muteButton.image.sprite = muteImage;
musicOn = false;

}
else{
AudioListener.pause = false;
AudioListener.volume = 1;
muteButton.image.sprite = musicOnImage;
musicOn = true;
}
}
function dubstepOrHappy(){
if(happyOn){
audioSource.Pause();
audioSource.clip = dubstepMusic;
audioSource.Play(); 
musicButton.image.sprite = dubstepImage;
happyOn = false;
}
else{
audioSource.Pause();
audioSource.clip = happyMusic;
audioSource.Play();
musicButton.image.sprite = happyImage;
happyOn = true;
}

}
