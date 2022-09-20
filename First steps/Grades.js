let nota1;
let nota2;
let nota3;

nota1 = prompt("¿Cuál fue la nota del primer trimestre?")

if (nota1 >= 6) {
    alert("Aprobó el primer trimestre.")
} else if (nota1 <= 6) {
    alert("Desaprobó el primer trimestre.")
} else {
    alert("Ingrese datos válidos.")
};

nota2 = prompt("¿Cuál fue la nota del segundo trimestre?")

if (nota2 >= 6) {
    alert("Aprobó el segundo trimestre.")
} else if (nota2 <= 6) {
    alert("Desaprobó el segundo trimestre.")
} else {
    alert("Ingrese datos válidos.")
};

nota3 = prompt("¿Cuál fue la nota del tercer trimestre?")

if (nota3 >= 6) {
    alert("Aprobó el tercer trimestre.")
} else if (nota3 <= 6) {
    alert("Desaprobó el tercer trimestre.")
} else {
    alert("Ingrese datos válidos.")
};

let promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
alert("Su promedio es: " + promedio + ".")

if (promedio >= 6 && nota3 >= 6) {
    alert("¡Felicitaciones, aprobaste el año!")
} else if ((promedio >= 6) && (nota3 <= 6)) {
    alert("Desaprobaste el año, pero no te preocupes, seguiremos trabajando juntos!")
} else if (promedio <= 6) {
    alert("Desaprobaste el año, pero no te preocupes, seguiremos trabajando juntos!")
} else {
    alert("Ingrese datos válidos")
};