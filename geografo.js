// --- BASE DE DATOS DE ESTE PLANETA ---
const capitulo = {
  titulo: "Planeta del Geógrafo",
        cita: "Espacio lleno de pergaminos",
        personaje: "👴 El Geógrafo",
        colorPlaceholder: "#2c5282",
        dialogos: [
            "—¡Ah! ¡Aquí viene un explorador! —exclamó el geógrafo al ver al Principito.",
            "—¿Qué es este gran libro? ¿Qué hace usted aquí? —preguntó el niño.",
            "—Soy geógrafo. Un sabio que sabe dónde se encuentran los mares, los ríos, las ciudades y las montañas.",
            "—¡Oh, es muy hermoso! ¿Y su planeta tiene océanos?",
            "—No puedo saberlo —dijo el geógrafo—. No soy explorador. Carezco por completo de exploradores para registrar los datos.",
            "—¿Qué planeta me aconseja usted que visite ahora? —preguntó el Principito.",
            "—El planeta Tierra —le respondió el geógrafo—. Tiene una excelente reputación...",
            "Y el Principito se marchó, pensando en su rosa."
        ]
    }

// --- CONTROLADOR DE DIÁLOGOS ---
let dialogoActualIndex = 0;

// Función para inicializar la portada al cargar la página
function iniciarPantalla() {
    document.getElementById("tituloPlaneta").innerText = capitulo.titulo;
    document.getElementById("citaPlaneta").innerText = capitulo.cita;

    dialogoActualIndex = 0;
    document.getElementById("textoActual").innerText = capitulo.dialogos[0];
    
    document.getElementById("portadaPlaneta").style.display = "block";
    document.getElementById("escenaInteractiva").style.display = "none";
    document.getElementById("menuSalida").style.display = "none";
    document.getElementById("cajaTexto").style.cursor = "pointer";
}

// Se ejecuta al hacer clic en el botón "Hablar con el personaje"
function comenzarCapitulo() {
    document.getElementById("portadaPlaneta").style.display = "none";
    document.getElementById("escenaInteractiva").style.display = "flex";
    document.getElementById("instruccionToca").style.display = "block";
    dialogoActualIndex = 1; 
}

// Maneja el avance de textos en la caja de diálogo
function avanzarDialogo() {
    const cajaTexto = document.getElementById("textoActual");

    if (dialogoActualIndex < capitulo.dialogos.length) {
        cajaTexto.innerText = capitulo.dialogos[dialogoActualIndex];
        dialogoActualIndex++;
    } else {
        cajaTexto.innerText = "Es momento de irse.";
        document.getElementById("instruccionToca").style.display = "none";
        document.getElementById("cajaTexto").style.cursor = "default";
        document.getElementById("menuSalida").style.display = "block";
    }
}

// Redirige al siguiente archivo HTML independiente
function siguientePlaneta() {
    window.location.href = "tierra.html"; 
}

// Redirige al inicio del juego
function volverInicio() {
    window.location.href = "index.html"; 
}

// Arrancar la pantalla por primera vez
iniciarPantalla();