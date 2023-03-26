const opuestos = {
    "piedra": "tijera",
    "tijera": "papel",
    "papel": "piedra"
}

const opciones = ["piedra", "papel", "tijera"]

const eleccionJugador = getRandomItemFromArray(opciones)
const eleccionMaquina = getRandomItemFromArray(opciones)
console.table({ "Jugador": eleccionJugador, "Maquina": eleccionMaquina });
if (eleccionJugador === eleccionMaquina) {
    console.log("Empate");
} else if (opuestos[eleccionJugador] === eleccionMaquina) {
    console.log("Jugador gana");
} else {
    console.log("Maquina gana");
}

function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)]
}
