//! Inicializo las variables 
const input = document.getElementById("input")
const button = document.getElementById("btn")
const lista = document.getElementById("lista")
const time = document.getElementById("time")
const date = document.getElementById("date")

class Tarea {
    constructor(nombreTarea, fechaTarea, horaTarea) {
        this.tarea = nombreTarea;
        this.fecha = fechaTarea;
        this.hora = horaTarea;
    }
}
const añadirTarea = () => {
    let verificadorDeEspacios = input.value.trim();

    if (verificadorDeEspacios != "") {
    // const tareaNueva = new Tarea();
    const tareaNueva = new Tarea();
    let tiempo = time.value;
    let fecha = time.value;
    let espacioParaTarea = document.createElement("ul");
    espacioParaTarea.textContent = input.value + " " + time.value + " " + date.value
    // espacioParaTarea.textContent = input.value +
        // document.write(`tu tiempo es ${tiempo}`)

        lista.appendChild(espacioParaTarea)
    input.value = ""
    time.value = ""
    date.value = ""
    }
}

const agregarTarea = button.addEventListener("click", añadirTarea)