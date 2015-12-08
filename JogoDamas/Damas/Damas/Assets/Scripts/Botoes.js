#pragma strict

var Skin: GUISkin;

function Start () {

}

function Update () {

}

function OnGUI(){
    GUI.skin=Skin;
    if(GUI.Button(Rect(10,10,100,60),"Reiniciar")){
        Application.LoadLevel("Stage");
    }
    if(GUI.Button(Rect(10,80,100,60),"Voltar Ao Menu")){
        Application.LoadLevel("Menu");
    }
}