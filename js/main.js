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

function cargarEquipos(cantidadequipos) {
    const equipos = [];

    for (let i = 1; i <= cantidadequipos; i++) {
        const nombre = prompt("Ingrese nombre del equipo");
        const ganados = parseInt(prompt("Ingrese partidos ganados del equipo" + nombre));
        const perdidos = parseInt(prompt("Ingrese partidos perdidos del equipo" + nombre));
        const empatados = parseInt(prompt("Ingrese partidos empatados del equipo" + nombre));
        
        equipos.push(new Equipo(nombre, ganados, perdidos, empatados));
    }

    return equipos;
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