alert("Bienvenidas a nuestro primera trivia de animales :D");

var name = prompt("Aprendemos jugando ingresa tu nombre");

alert("responde las preguntas");



function activar() {

    var preguntaUno = document.animales.preguntaUno.value;
    var preguntaDos = document.animales.preguntaDos.value;
    var preguntaTres = document.animales.preguntaTres.value;

    var correcta = 0;

    if (preguntaUno == "Perro") {

        correcta++;

    }

    if (preguntaDos == "Oso") {

        correcta++;

    }

    if (preguntaTres == "Caballo") {

        correcta++;

    }

    var mensajes = ["!Excelente!", "Esfuerzate un poco mas", "Sigue intentando"];

    var rango;

    if (correcta < 1) {

        rango = 2;
    }

    if (correcta > 0 && correcta < 3) {

        rango = 1;

    }

    if (correcta > 2) {

        rango = 0;
    }





    document.getElementById("envio").style.visibility = "visible";
    document.getElementById("mensajes").innerHTML = mensajes[rango];
    document.getElementById("respuestas").innerHTML = "tienes " + correcta + " correcta";

}

















