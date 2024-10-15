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

let cantidadequipos = parseInt(prompt("Ingrese cantidad de equipos"))
lista_puntos = []
for (let i = 1; i <= cantidadequipos; i++ ) {
    const puntos_equipo = cargardatos(i)
    lista_puntos.push(puntos_equipo)
}