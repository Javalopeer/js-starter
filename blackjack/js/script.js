
// Se crea una funcion anonima
// Esta es para autoinvocarse; se deben crear los parentesis al inicio y al final para esto

(() => {
    'use strict'

    let deck = []
    const tipos = ['C', 'D', 'S', 'H']
    const especiales = ['J', 'K', 'Q', 'A']

    let puntosJugador = 0;
    let puntosComputadora = 0;


    const crearDeck = () => {

        deck = []

        for (let i = 2; i <= 10; i++) {
            for (let tipo of tipos) {
                deck.push(i + tipo)
            }
        }
        for (let espec of especiales) {
            for (let tipo of tipos) {
                deck.push(espec + tipo)
            }
        }

        return deck = _.shuffle(deck)
    }

    crearDeck()

    const pedirCarta = () => {
        if (deck.length === 0) {
            throw "No hay cartas en el deck"
        }
        const carta = deck.pop()
        return carta
    }

    pedirCarta()


    // Logica computadora 

    const divCartasComputadora = document.getElementById("computadora-cartas")

    const turnoComputadora = (puntosMinimos) => {


        do {

            const carta = pedirCarta();
            puntosComputadora = puntosComputadora + valorCarta(carta)
            puntaje[1].innerText = puntosComputadora

            const imgCarta = document.createElement('img')
            imgCarta.src = `assets/cartas/${carta}.png`
            imgCarta.classList.add('carta')
            divCartasComputadora.append(imgCarta)

            if (puntosMinimos > 21) {
                break;
            }

        } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21)) {
            setTimeout(() => {
                (puntosComputadora === puntosMinimos) ? alert('Nadie gana')
                    : (puntosMinimos > 21) ? alert('Computadora gana')
                        : alert('Jugador gana')
            }, 20);
        }


    }

    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length - 1)
        return (isNaN(valor)) ? (valor === 'A') ? 11 : 10 : valor * 1
    }

    const valor = valorCarta(pedirCarta())

    //EVENTOS

    const nuevo = document.getElementById('btnNuevo')
    const pedir = document.getElementById('btnPedir')
    const detener = document.getElementById('btnDetener')

    const divCartasJugador = document.getElementById("jugador-cartas")
    const puntaje = document.querySelectorAll('small')



    pedir.addEventListener('click', () => {


        const carta = pedirCarta();
        puntosJugador = puntosJugador + valorCarta(carta)

        puntaje[0].innerText = puntosJugador

        const imgCarta = document.createElement('img')
        imgCarta.src = `assets/cartas/${carta}.png`
        imgCarta.classList.add('carta')

        divCartasJugador.append(imgCarta)

        if (puntosJugador > 21) {
            pedir.disabled = true
            detener.disabled = true
            turnoComputadora(puntosJugador)

        } else if (puntosJugador === 21) {
            pedir.disabled = true
            detener.disabled = true
            turnoComputadora(puntosJugador)
        }

    })

    detener.addEventListener('click', () => {
        pedir.disabled = true
        detener.disabled = true

        turnoComputadora(puntosJugador)
    })

    nuevo.addEventListener('click', () => {

        deck = crearDeck()

        puntosJugador = 0
        puntosComputadora = 0

        puntaje[0].innerText = 0
        puntaje[1].innerText = 0

        divCartasComputadora.innerText = ''
        divCartasJugador.innerText = ''

        pedir.disabled = false
        detener.disabled = false


    })

})()




