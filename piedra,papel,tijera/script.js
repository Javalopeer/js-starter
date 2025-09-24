let contadorHumano = 0;
let contadorPc = 0;

function jugar(opcion) {
    const opciones = ["piedra", "papel", "tijera"]
    const eleccionPc = opciones[Math.floor(Math.random() * 3)]

    let resultado = "";

    if (opcion === eleccionPc) {
        resultado = "Empate, ambos eligieron " + opcion
    } else if (
        (opcion === "piedra" && eleccionPc === "tijera") ||
        (opcion === "papel" && eleccionPc === "piedra") ||
        (opcion === "tijera" && eleccionPc === "papel")
    ) {
        resultado = "Felicidades! Ganaste, escogiste " + opcion + ", y la maquina escogio " + eleccionPc
        contadorHumano++
    } else {
        resultado = "Has perdido, intentalo de nuevo \n Eleccion: " + opcion + "\nEleccion PC: " + eleccionPc
        contadorPc++
    }

    document.getElementById("resultado").textContent = resultado
    document.getElementById("contadorPc").textContent = "Puntos PC " + contadorPc
    document.getElementById("contadorHumano").textContent = "Puntos Humano " + contadorHumano
}


const opt = document.querySelectorAll(".opcion");
opt.forEach(boton => {
    boton.addEventListener("click", () => {
        const optEleccion = boton.dataset.opcion;
        jugar(optEleccion)
    })
});
