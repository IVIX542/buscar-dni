//Creamos el array vacio
var tabla = new Array(5);
tabla[0] = new Array(3);
tabla[1] = new Array(3);
tabla[2] = new Array(3);
tabla[3] = new Array(3);
tabla[4] = new Array(3);

//Rellenamos los DNI
tabla[0][0] = "123456A";
tabla[1][0] = "123456B";
tabla[2][0] = "123456C";
tabla[3][0] = "123456D";
tabla[4][0] = "123456E";

//Rellenamos la EDAD
tabla[0][1] = 15;
tabla[1][1] = 16;
tabla[2][1] = 17;
tabla[3][1] = 18;
tabla[4][1] = 19;

//Rellenamos la DIRECCION
tabla[0][2] = "Su casa";
tabla[1][2] = "Calle palomitas";
tabla[2][2] = "Calle recta";
tabla[3][2] = "Calle curva";
tabla[4][2] = "Calle grande";

function buscar(){
    var dni = document.getElementById("dni").value;
    var x = 0;

    while(x<5){
        if(dni == tabla[x][0]){
            document.getElementById("edad").value = tabla[x][1];
            document.getElementById("direccion").value = tabla[x][2];
            x = 100;
        } else{
            x++;
        }
    }

    var no_edad = document.getElementById("edad");
    var no_direccion = document.getElementById("direccion");

    if(x == 5){
        document.getElementById("edad").value = "No encontrado";
        document.getElementById("direccion").value = "No encontrado";
        no_edad.style.color = "red";
        no_direccion.style.color = "red";
        
    }
}