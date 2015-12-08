#pragma strict

var Bloco: GameObject;
var BlocoAux: GameObject;
var MatrizTabuleiro: int[,];

function Start () {
    MatrizTabuleiro= new int[8,8];
    InstanciaTabuleiro(MatrizTabuleiro);
}

function Update () {

}

function InstanciaTabuleiro(Tabuleiro: int[,]){
    var x: int;
    var z: int;
    for(x=0;x<8;x++){
        for(z=0;z<8;z++){
            BlocoAux=Instantiate(Bloco, transform.position-
                Bloco.transform.lossyScale.x*3.5*transform.right-
                Bloco.transform.lossyScale.z*3.5*transform.forward+
                Bloco.transform.lossyScale.x*x*Bloco.transform.right+
                Bloco.transform.lossyScale.z*z*Bloco.transform.forward, transform.rotation);
            if(((x%2==0) && (z%2!=0)) || ((x%2!=0) && (z%2==0))){
                BlocoAux.GetComponent.<Renderer>().material.color= Color.black;
            }
        }
    }
    transform.eulerAngles.x=90;
}