const botonNumeros = document.getElementsByName('number');
const botonOperadores = document.getElementsByName('operador');

const botonIgual = document.getElementById('igual');
const botonClean = document.getElementById('clean');

var resultado = document.getElementById('resultado');

var valorActual = "";
var valorAnterior = "";
var operacion = "undefined";


//Selecciona de los numeros 
botonNumeros.forEach(boton =>{
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});


//Agrega el Numero clickeado al Display - Numero a texto 
function agregarNumero(num) {
    valorActual = valorActual.toString() + num.toString();
    actualizarDisplay();
}


//Selecciona de los Operadores
botonOperadores.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    })
});


//Selecciona (+-/*) = (op) validacion y funcion  
function selectOperacion(op) {
    if (valorActual === '') return;
    if (valorAnterior !== '') {
        calcular()
    }
    operacion = op.toString();
    valorAnterior = valorActual;
    valorActual = '';
}


//Disparador
botonIgual.addEventListener('click', function () {
    calcular();
    actualizarDisplay();
});


function calcular() {
    var calculo;
    const anterior = parseFloat(valorAnterior);
    const actual = parseFloat(valorActual);
    if (isNaN(anterior) || isNaN(actual)) return alert ("Digite solo números");
    

    switch (operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'X':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }

    valorActual = calculo;
    operacion = undefined;
    valorAnterior = '';

}


//Borra y escribe los nuevos valores
function actualizarDisplay() {
    resultado.value = valorActual
}


//Disparador
botonClean.addEventListener('click', function () {
    clear();
    actualizarDisplay();
});


//limpia el display 
function clear() {
    valorActual = "";
    valorAnterior = "";
    operacion = "undefined"
}