let lista = [];

lista[0] = prompt("Ingrese que producto quiere llevar");
lista.push(prompt("Ingrese que producto quiere llevar"));
lista.push(prompt("Ingrese que producto quiere llevar"));

alert("Estos son los productos que usted seleccionó para llevar: " + lista);

let respuesta;

respuesta = prompt("¿Quiere llevar más productos? Ingrese si/no");

if (respuesta == "si") {
    lista.push(prompt("Ingrese que producto quiere llevar")) && alert("Estos son los productos que usted seleccionó para llevar: " + lista);
} else {
    alert("Estos son los productos que usted seleccionó para llevar: " + lista);
};

alert("Gracias por su compra")