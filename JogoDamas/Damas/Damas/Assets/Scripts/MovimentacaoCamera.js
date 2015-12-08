#pragma strict

var velocidadeZoom: float;
var velocidadeRotHor: float;
var velocidadeRotVer: float;
var Centro: Vector3;

var raio:Ray;
var ObjetoCentro:RaycastHit;

var Olho: Transform;

var AuxTabuleiro: GeraTabuleiro;

function Start () {
    AuxTabuleiro = transform.GetComponent("GeraTabuleiro");
}

function Update () {

    Olho.position = transform.position;

    velocidadeZoom += Input.GetAxis("Mouse ScrollWheel")*0.01;

    if (Input.GetMouseButton(2))
    {
        velocidadeRotHor += Input.GetAxis("Mouse X")*0.01;
        velocidadeRotVer += Input.GetAxis("Mouse Y")*0.01;
    }


    velocidadeZoom   = Mathf.Lerp(velocidadeZoom,0,0.001);
    velocidadeRotHor = Mathf.Lerp(velocidadeRotHor,0,0.01);
    velocidadeRotVer = Mathf.Lerp(velocidadeRotVer,0,0.01);

    raio = transform.GetComponent.<Camera>().ScreenPointToRay(Input.mousePosition);

    if (Input.GetMouseButtonDown(0)){
        if (Physics.Raycast(raio,ObjetoCentro))
        {
            Centro = ObjetoCentro.transform.position;
        }
        else
        {
            Centro = Vector3(0,-9,-11);
        }
    }


    Olho.LookAt(Centro);

    //transform.rotation = Quaternion.Lerp(transform.rotation,Olho.rotation,0.01);

    //transform.RotateAround(Centro,Vector3.up,velocidadeRotHor);
    //transform.RotateAround(Centro,transform.right,velocidadeRotVer);
    transform.position += transform.forward*velocidadeZoom;

}