class Equipo {
    constructor(nombre, ganados, perdidos, empatados) {
        this.nombre = nombre;
        this.ganados = ganados;
        this.perdidos = perdidos;
        this.empatados = empatados;
    }

    calcularPuntos() {
        return this.ganados * 3 + this.perdidos * 0 + this.empatados * 1;
    }
}

function calcular_puntos (partidosg,partidosp,partidose) {
    let puntos = partidosg*3 + partidosp*0 + partidose*1
    return puntos
}

function cargardatos (numero_equipo) {
    let ganados = parseInt(prompt("Inrgese partidos ganados del equipo " + numero_equipo))
    let perdidos = parseInt(prompt("Inrgese partidos perdidos del equipo " + numero_equipo))
    let empatados = parseInt(prompt("Inrgese partidos empatados del equipo " + numero_equipo))
    let puntos = calcular_puntos(ganados, perdidos, empatados)
    return puntos
}

function calcular_campeone (lista) {
    let indice_del_mayor = 0
    for (let i=0; i< lista.length; i++) {
        if (lista[i] > lista[indice_del_mayor]) {
            indice_del_mayor = i
        }
    }
    indice_del_mayor = indice_del_mayor + 1
    alert("Le campeone es el equipo "+ indice_del_mayor + " FELICITACIONES")
}

let cantidadequipos = parseInt(prompt("Ingrese cantidad de equipos"))
lista_puntos = []
for (let i = 1; i <= cantidadequipos; i++ ) {
    const puntos_equipo = cargardatos(i)
    lista_puntos.push(puntos_equipo)
}
calcular_campeone (lista_puntos)