function activar() {
    let a = document.getElementById('pantalla').value;
    let b = document.getElementById('activar');

    if (a !== '') {
        b.disabled = false;
    } else {
        b.disabled = true;
    }
}

function calcular() {
    const resultado = document.getElementById('tabla')
    let a = document.getElementById('pantalla').value;

    if (a === '') {
        resultado.hidden = true
    } else {
        resultado.hidden = false;
        resultado.innerHTML = "";
        let num = parseInt(a);

        let titulo = document.createElement("h3")
        titulo.textContent = "Tabla del " + num;
        resultado.appendChild(titulo)

        for (let i = 1; i <= 10; i++) {
            let linea = document.createElement("p")
            linea.textContent = num + " x " + i + " = " + (num * i);
            resultado.appendChild(linea);
        }

    }
}
