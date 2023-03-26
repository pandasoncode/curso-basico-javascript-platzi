var frutas = ["manzana", "pera", "piña", "fresa", "uva"]
console.log(frutas);
console.log("Longitud", frutas.length);
console.log(frutas[0]);

// CON PUSH AGREGAS ITEMS AL FINAL
frutas.push("platano")
console.log(frutas);

// CON UNSHIFT AGREGAS ITEMS AL PRINCIPIO
frutas.unshift("banana");
console.log(frutas);

// CON POP ELIMINAS EL ULTIMO ITEM
var ultimo = frutas.pop()
console.log(frutas, ultimo);

// CON SHIFT ELIMINAS EL PRIMER ITEM
var primero = frutas.shift()
console.log(frutas, primero);

// CON INDEXOF OBTENEMOS LA POSICION DE UN ITEM
console.log(frutas.indexOf("piña"));
// DEVUELVE -1 SI EL ITEM NO EXISTE
console.log(frutas.indexOf("mango"));
