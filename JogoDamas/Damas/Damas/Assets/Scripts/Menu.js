#pragma strict

var Skin: GUISkin;

function Start () {

}

function Update () {

}

function OnGUI(){
    GUI.skin=Skin;
    if(GUI.Button(Rect(Screen.width/2-125,Screen.height/2-100,250,70),"Start Game")){
        Application.LoadLevel("Stage");
    }
    if(GUI.Button(Rect(Screen.width/2-125,Screen.height/2,250,70),"Exit Game")){
        Application.Quit();
    }
}