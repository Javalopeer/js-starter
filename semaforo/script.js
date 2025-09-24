function encender(color) {
    document.getElementById("rojo").classList.remove("activo")
    document.getElementById("amarillo").classList.remove("activo")
    document.getElementById("verde").classList.remove("activo")

    document.getElementById(color).classList.add("activo")

}