#pragma strict

var mat_normal: Material;
var mat_sobre: Material;

function Start () {

}

function Update () {

}

function OnMouseEnter(){
    //Debug.Log("O Mouse entrou sobre o objeto");
    GetComponent.<Renderer>().material = mat_sobre;
}

function OnMouseExit(){
    //Debug.Log("O Mouse Saiu do Objeto");
    GetComponent.<Renderer>().material = mat_normal;
}