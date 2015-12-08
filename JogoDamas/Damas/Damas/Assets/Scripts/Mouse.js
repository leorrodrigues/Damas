#pragma strict

var mat_normal: Material;
var mat_sobre: Material;
var mover: boolean;
var PosAnt: Vector3;
public var Bloco: GameObject;

function Start () {

}

function Update () {
    if(Input.GetMouseButtonUp(0)){
        mover=false;
    }
    if(mover){
        //transform.position= new Vector3(Input.mousePosition.x,2,Input.mousePosition.y);
        //print(Input.mousePosition.x-PosAnt.x);
        
        print(Input.mousePosition);
        transform.position=new Vector3(((Input.mousePosition.x-PosAnt.x)/49)+0.5,2,((Input.mousePosition.y-PosAnt.y)/49)+0.5);
    }
}

function OnMouseOver(){
    //Debug.Log("O Mouse esta sobre o Objeto");
    if(Input.GetMouseButtonDown(0) && tag=="Pick"){
        mover=true;
        PosAnt=Input.mousePosition;
    }
}

function OnMouseEnter(){
    //Debug.Log("O Mouse entrou sobre o objeto");
    GetComponent.<Renderer>().material = mat_sobre;
}

function OnMouseExit(){
    //Debug.Log("O Mouse Saiu do Objeto");
    GetComponent.<Renderer>().material = mat_normal;
}