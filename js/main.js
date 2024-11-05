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

function calcular_campeone (equipos) {
    let campeon = equipos[0];

    equipos.forEach(equipo => {
        if (equipo.calcularPuntos() > campeon.calcularPuntos()) {
            campeon = equipo;
        }
    });

    alert("Le campeone es el equipo "+ campeon.nombre + " FELICITACIONES")
}

function mostrarTablaPuntos(equipos) {
    const tablaPuntos = document.querySelector('#tabla-puntos tbody');
    tablaPuntos.innerHTML = '';

    equipos.forEach(equipo => {
        const fila = document.createElement('tr');
        fila.innerHTML = "<td>" + equipo.nombre + "</td><td>" + equipo.calcularPuntos() + "</td>";
        tablaPuntos.appendChild(fila);
    });
}

function mostrarEquiposClasificados(equipos) {
    const equiposClasificados = document.querySelector('#equipos-clasificados');
    equiposClasificados.innerHTML = '';

    const algunEquipoConMasDe5Puntos = equipos.some(equipo => equipo.calcularPuntos() > 5);

    if (algunEquipoConMasDe5Puntos) {
        const equiposConMasDe5Puntos = equipos.filter(equipo => equipo.calcularPuntos() > 5);
        equiposConMasDe5Puntos.forEach(equipo => {
            const item = document.createElement('li');
            item.textContent = equipo.nombre + " - " +  equipo.calcularPuntos() + "puntos";
            equiposClasificados.appendChild(item);
        });
    } else {
        equiposClasificados.textContent = "No hay equipos clasificados al próximo torneo";
    }
}

function guardarEquiposEnLocalStorage(equipos) {
    localStorage.setItem("cantidadEquipos", equipos.length);
    equipos.forEach((equipo, numero) => {
        localStorage.setItem("equipo" + numero + "_nombre", equipo.nombre);
        localStorage.setItem("equipo" + numero + "_ganados", equipo.ganados);
        localStorage.setItem("equipo" + numero + "_perdidos", equipo.perdidos);
        localStorage.setItem("equipo" + numero + "_empatados", equipo.empatados);
    });
}

function cargarEquiposDesdeLocalStorage() {
    const cantidadEquipos = parseInt(localStorage.getItem("cantidadEquipos"));
    const equipos = [];

    for (let i = 0; i < cantidadEquipos; i++) {
        const nombre = localStorage.getItem("equipo" + i + "_nombre");
        const ganados = parseInt(localStorage.getItem("equipo" + i + "_ganados"));
        const perdidos = parseInt(localStorage.getItem("equipo" + i + "_perdidos"));
        const empatados = parseInt(localStorage.getItem("equipo" + i + "_empatados"));

        equipos.push(new Equipo(nombre, ganados, perdidos, empatados));
    }
    return equipos;
}

function cargarEquipos() {
    const equipos = cargarEquiposDesdeLocalStorage();
    if (equipos.length > 0) {
        return equipos;
    }

    const cantidadEquipos = parseInt(prompt("Ingrese cantidad de equipos"));
    for (let i = 1; i <= cantidadEquipos; i++) {
        const nombre = prompt("Ingrese nombre del equipo");
        const ganados = parseInt(prompt("Ingrese partidos ganados del equipo " + nombre));
        const perdidos = parseInt(prompt("Ingrese partidos perdidos del equipo " + nombre));
        const empatados = parseInt(prompt("Ingrese partidos empatados del equipo " + nombre));
        
        equipos.push(new Equipo(nombre, ganados, perdidos, empatados));
    }

    guardarEquiposEnLocalStorage(equipos);
    return equipos
}

function main() {
    const equipos = cargarEquipos();

    mostrarTablaPuntos(equipos);
    mostrarEquiposClasificados(equipos);
    calcular_campeone(equipos);
}

main();