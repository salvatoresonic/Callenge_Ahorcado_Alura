let listaPalabras = ["ALURA", "CHALLENGE","ORACLE","AHORCADO","PROGRAMAR", "CODING", "JAVASCRIPT", "ITERACION"]
let palabraAleatoria = ""
let palabraGuiones = ""
let intentos = 8 
var canvas = document.querySelector("#ahorcado")
var espacioIntentos = document.querySelector("#intentos")
var botonVerificar = document.querySelector("#boton-verificar")
var botonReiniciar = document.querySelector("#reiniciar-juego")
var div1 = document.querySelector("#div1") 

console.log(div1)

//Click en el boton "iniciar juego"
document.getElementById("iniciar-juego").addEventListener("click", iniciarJuego);


//Funcion para iniciar el juego al dar click en el boton iniciar
function iniciarJuego(){
    pincel.clearRect(0, 0, canvas.width, canvas.height);
    botonVerificar.scrollIntoView({block: "end", behavior: "smooth"});
    document.getElementById("boton-verificar").addEventListener("click", verificarLetra);
    prepararTablero();
    
}



//Función para seleccionar una palabra aleatoria de la lista de palabras
function seleccionarPalabra(){
    palabraAleatoria = listaPalabras[Math.floor((Math.random()*listaPalabras.length))];
    return palabraAleatoria;
}

palabraAleatoria = seleccionarPalabra();
console.log(palabraAleatoria);


// Función crear la palabra pero en guiones bajos e ingresarla en espacio del index
function palabraEnGuiones(){
    palabraGuiones = palabraAleatoria.replace(/./g,"_ ");
    document.getElementById("espacio-palabra-guiones").innerHTML = palabraGuiones;
    return palabraGuiones;
}

palabraGuiones = palabraEnGuiones();
console.log(palabraGuiones);


// Función para verificar que la letra ingresada esta en la palabra
function verificarLetra(){
    
    var letraIngresada = document.getElementById("ingreso-letra").value.toUpperCase();
    console.log(letraIngresada);;
    let letrasPermitidas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let letrasUsadas = []; 

    if(letrasPermitidas.indexOf(letraIngresada)==-1){    //si dentro del arreglo "letras permitidas" se busca "letra ingresada" y no se encuentra (-1)
        document.getElementById("ingreso-letra").value = "";
        document.getElementById("ingreso-letra").focus();
        return alert("Por favor ingresa solo letras");
    } 
     
    let resultadoComparacion = "";
    for(i=0;i<palabraAleatoria.length; i++){
        if(letraIngresada == palabraAleatoria[i]){
            resultadoComparacion = resultadoComparacion + letraIngresada + " " // revisar esta parte
        }else{   
            resultadoComparacion = resultadoComparacion + palabraGuiones[i*2] + " " // revisar esta parte
            
        }
    }
    
    if(resultadoComparacion == palabraGuiones){
        intentos--;
        document.getElementById("intentos").innerHTML = "Tienes " + intentos + " intentos"
    }

    palabraGuiones = resultadoComparacion
    document.getElementById("espacio-palabra-guiones").innerHTML = palabraGuiones
    
    if(intentos == 0){
        dibujarMensaje("Lástima perdiste :( ")

    }

    if(palabraGuiones.search("_")==-1){
        dibujarMensaje("!!!Felicidades, ganaste!!! ")
    }
    document.getElementById("ingreso-letra").value = ""
    document.getElementById("ingreso-letra").focus();
    
    
    dibujarAhorcado()
    
}


//Funcion para reiniciar el juego
botonReiniciar.addEventListener("click", reiniciarJuego);

function reiniciarJuego(){
    window.onbeforeunload = function () {
        window.scroll(0, 0);
    }   
    location.reload();       
}

