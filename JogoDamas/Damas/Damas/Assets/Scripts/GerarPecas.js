#pragma strict

var Pecas1: GameObject;
var Pecas2: GameObject;
var Bloco: GameObject;
var P1: GameObject[];
var P2: GameObject[];
var i: int;
var x: int;
var z: int;
var vez: int;
var PosAnt: Vector3;

function Start () {
    vez=0;
    P1= new GameObject[12];
    InstanciaPecasAzuis();
    P2= new GameObject[12];
    InstanciaPecasVermelhas();
}

function Update () {
    
}

function InstanciaPecasAzuis(){
    i=0;
    for(x=0;x<3;x++){
        for(z=0;z<8;z++){
            if(((x%2!=0) && (z%2==0)) || ((x%2==0) && (z%2!=0))){ 
                P1[i]=Instantiate(Pecas1,new Vector3(x-3.5,2,z-3.5), Quaternion.identity);
                P1[i].GetComponent.<Renderer>().material.color= Color.blue;
                i++;
            }
        }
    }
}
function InstanciaPecasVermelhas(){
    i=0;
    for(x=5;x<8;x++){
        for(z=0;z<8;z++){
            if(((x%2!=0) && (z%2==0)) || ((x%2==0) && (z%2!=0))){ 
                P2[i]=Instantiate(Pecas2,new Vector3(x-3.5,2,z-3.5), Quaternion.identity);
                P2[i].GetComponent.<Renderer>().material.color= Color.red;
                i++;
            }
        }
    }
}