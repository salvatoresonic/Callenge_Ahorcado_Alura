var canvas = document.querySelector("#ahorcado")
var pincel = canvas.getContext('2d');
var centrar = canvas.width/2;


// Dibujar Mensaje con "Ganaste" o "Perdiste"
function dibujarMensaje (mensaje){
    pincel.font = '30px Verdana'
    pincel.fillStyle = "#0A3871"
    pincel.fillText(mensaje, 750, 520)
}


function prepararTablero(){
    //titulo bienvenidas 
    pincel.font="25pt Verdana";
    pincel.textAlign = "center"
    pincel.fillStyle = "#0A3871";
    pincel.fillText("BIENVENIDO AL JUEGO",centrar,50);
    
    //base palo ahorcado
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 6;
    pincel.beginPath();
    pincel.moveTo(200,500);
    pincel.lineTo(400,500);
    pincel.stroke();    

}



function dibujarPaloAhorcado(){
    pincel.strokeStyle = "#0A3871";
    pincel.lineWidth = 6;
    pincel.beginPath();
    pincel.moveTo(300,500);
    pincel.lineTo(300,100);
    pincel.stroke();    
}



function dibujarTrabesañoAhorcado() {
    pincel.strokeStyle = "#0A3871"
    pincel.lineWidth = 6
    pincel.beginPath()
    pincel.moveTo(300,100)
    pincel.lineTo(650,100);
    pincel.lineTo(650,150);
    pincel.stroke();
}



function dibujarCabezaAhorcado(){
    pincel.fillStyle = "#0A3871"
    pincel.beginPath()
    pincel.arc(650,170, 40,0,2*3.14)
    pincel.fill();
}

function dibujarToraxAhorcado(){
    pincel.strokeStyle = "#0A3871"
    pincel.lineWidth = 6
    pincel.beginPath()
    pincel.moveTo(650,150)
    pincel.lineTo(650,350);
    pincel.stroke();
}

function dibujarBrazoIzqAhorcado (){
    pincel.strokeStyle = "#0A3871"
    pincel.lineWidth = 6
    pincel.beginPath()
    pincel.moveTo(650,230)
    pincel.lineTo(600,330);
    pincel.stroke();
}


function dibujarBrazoDerAhorcado(){
    pincel.strokeStyle = "#0A3871"
    pincel.lineWidth = 6
    pincel.beginPath()
    pincel.moveTo(650,230)
    pincel.lineTo(700,330);
    pincel.stroke();
}

function dibujarPiernaIzqAhorcado(){
    pincel.strokeStyle = "#0A3871"
    pincel.lineWidth = 6
    pincel.beginPath()
    pincel.moveTo(650,350)
    pincel.lineTo(600,450);
    pincel.stroke();
}

function dibujarPiernaDerAhorcado(){
    pincel.strokeStyle = "#0A3871"
    pincel.lineWidth = 6
    pincel.beginPath()
    pincel.moveTo(650,350)
    pincel.lineTo(700,450);
    pincel.stroke();
}

function dibujarAhorcado(){
    
    if(intentos<=7){
        dibujarPaloAhorcado()
    }
    if(intentos<=6){
        dibujarTrabesañoAhorcado()
    }
    if(intentos<=5){
        dibujarCabezaAhorcado()
    }
    if(intentos<=4){
        dibujarToraxAhorcado()
    }
    if(intentos<=3){
        dibujarBrazoDerAhorcado()
    }
    if(intentos<=2){
        dibujarBrazoIzqAhorcado()
    }
    if(intentos<=1){
        dibujarPiernaDerAhorcado()
    }
    if(intentos==0){
        dibujarPiernaIzqAhorcado()
    }

}