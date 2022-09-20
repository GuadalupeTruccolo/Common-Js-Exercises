let students = [];
students[0] = "Alex";
students[1] = "David";
students[2] = "George";
students[3] = "Bill";


let cursosDeAp = ["Desarrollo web 1", "Desarrollo web 2", "Drones"];
console.log(cursosDeAp[0]); // Desarrollo web 1
console.log(cursosDeAp[1]); // Desarrollo web 2
console.log(cursosDeAp[2]); // Drones


let semana = ["Lumes", "Martez", "Miercolez"]; // corregir valores
semana[0] = "Lunes";
semana[1] = "Martes";
semana[2] = "Miercoles";


const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop()); // "tomato"

console.log(plants); // Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop(); // kale

console.log(plants); // Array ["broccoli", "cauliflower", "cabbage"]


let semana = ["Lunes", "Martes", "Miercoles"];
semana.shift(); // Lunes

let semana = ["Lunes", "Martes", "Miercoles"];
semana.unshift("Domingo"); // 4

let semana = ["Domingo", "Lunes", "Martes", "Miercoles"];
semana.length; // 4

// El método indexOf() retorna el primer índice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente.

let semana = ["Domingo", "Lunes", "Martes", "Miercoles"];
semana.indexOf("Lunes"); // 1

let semana = ["Lunes", "Martes", "Miercoles"];
semana.splice(1, 1) // semana tendrá a ["Lunes", "Miercoles"]