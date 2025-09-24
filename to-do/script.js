function agregar() {
    const input = document.getElementById("nombre").value;
    const texto = input.trim();
    const lista = document.getElementById("lista");

    if (texto === "") {
        alert("Escribe algo antes de agregar");
        return;
    }

    let li = document.createElement("li")
    li.textContent = texto

    let boton = document.createElement("button")
    boton.textContent = "❌"
    boton.onclick = function () {
        lista.removeChild(li)
    }

    li.appendChild(boton)

    lista.appendChild(li)

    input.value = ""


}

