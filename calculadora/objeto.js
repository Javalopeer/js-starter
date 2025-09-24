let auto = {
    marca: 'Fiat',
    modelo: 'UNO',
    peso: 550,
    color: 'Rojo'
}

let auto2 = {
    marca: 'Renault',
    modelo: 'DOS',
    peso: 750,
    color: 'Marron'
}


console.log(`Auto 1 : ${auto.marca} de color ${auto.color}`)
console.log(`Auto 2 : ${auto2.marca} de color ${auto2.color}`)

console.log(`Auto 1 :`, auto)
console.log(`Auto 2 :`, auto2)




const vendedor = {

    nombre: 'Pedro',
    apellido: 'Guzman',
    empresa: 'Ventas S.A',
    habilidadesBlandas: ['Comunicacion', 'Carisma'],
    vender: function () {
        return 'Pedro ha vendido un coche'
    },
    nombreCompleto: function () {
        return this.nombre + " " + this.apellido
    }
}

console.log(vendedor.nombreCompleto())

