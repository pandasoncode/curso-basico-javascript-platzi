const opciones = ["piedra", "papel", "tijera"]
const opuestos = ["tijera", "piedra", "papel"]
const eleccionPrimerJugador = "papel";
const eleccionSegundoJugador = "tijera";

const num1 = getArrayIndex(opciones, eleccionPrimerJugador);
const num2 = getArrayIndex(opuestos, eleccionSegundoJugador);

if (eleccionPrimerJugador === eleccionSegundoJugador) {
    console.log("Empate");
} else if (num1 === num2) {
    console.log("Jugador uno gana");
} else {
    console.log("Jugador dos gana");
}

function getArrayIndex(array, element) {
    const index = array.findIndex(e => e === element);
    console.log(index);
    return index;
}
