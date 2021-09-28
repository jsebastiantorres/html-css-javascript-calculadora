const botonNumeros = document.getElementsByName('number');
const botonOperadores = document.getElementsByName('operador');

/*
const botonSumar = document.getElementById('sumar');
const botonRestar = document.getElementById('restar');
const botonMultiplicar = document.getElementById('multiplicar');
const botonDividir = document.getElementById('dividir');
*/


const botonIgual = document.getElementById('igual');
const botonClean = document.getElementById('clean');

var resultado = document.getElementById('resultado');

var operacionActual = ""
var operacionAnterior = ""
var operacion = "undefined"

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText);
    })
});

botonOperadores.forEach(function(boton){
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);
    
    })
});

/*//SUMAR
botonSumar.addEventListener('click', function () {
    selectOperacion(boton.innerText);
});

//RESTAR
botonRestar.addEventListener('click', function () {
    selectOperacion(boton.innerText);
});

//MULTIPLICAR
botonMultiplicar.addEventListener('click', function () {
    selectOperacion(boton.innerText);
});

//DIVIDIR
botonDividir.addEventListener('click', function () {
    selectOperacion(boton.innerText);
});
*/


botonIgual.addEventListener('click', function () {
    calcular();
    actualizarDisplay();
})


botonClean.addEventListener('click', function () {
    clear();
    actualizarDisplay();
});


//agrega el numero clickeado al display - numero a texto
function agregarNumero(num) {
    operacionActual = operacionActual.toString() + num.toString();
    actualizarDisplay();
}

//limpia el display 
function clear() {
    operacionActual = "";
    operacionAnterior = "";
    operacion = "undefined"
}

//Borra y escribe los nuevos valores
function actualizarDisplay() {
    resultado.value = operacionActual
}


function selectOperacion(op) {
    if (operacionActual === '') return;
    if (operacionAnterior !== '') {
        calcular()
    }
    operacion = op.toString();
    operacionAnterior = operacionActual;
    operacionActual = '';
}

function calcular() {
    var calculo;
    const anterior = parseFloat(operacionAnterior);
    const actual = parseFloat(operacionActual);
    if (isNaN(anterior) || isNaN(actual)) return;

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
    operacionActual = calculo;
    operacion = undefined;
    operacionAnterior = '';

}
