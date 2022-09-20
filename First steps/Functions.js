function sumar(nro1, nro2) {
    console.log("La suma es:")
    console.log(nro1 + nro2)
}
sumar(10, 30)


function suma(nro1, nro2) {
    return nro1 + nro2;
}
let resultado = suma(10, 30); // resultado almacena el valor 30


function function1(fn) {
    setTimeout(function () {
        console.log("mensaje 1");
        fn()
    }, 1000);
}

function function2() {
    console.log("mensaje 2");
}

function1(function2);


function preguntar(pregunta, si, no) {
    if (confirm(pregunta)) {
        si()
    } else {
        no();
    }
}

function showOk() {
    alert("Tu respuesta es si");
}

function showCancel() {
    alert("Tu respuesta es no");
}

// funciones "showOk" y "showCancel" son pasados como argumentos para ser tomados como parámetros en la función
preguntar("¿Estás de acuerdo?", showOk, showCancel);