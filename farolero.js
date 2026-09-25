// --- BASE DE DATOS DE ESTE PLANETA ---
const capitulo = {
   titulo: "Planeta del Farolero",
        cita: "Se observa una gran luz",
        personaje: "🧑‍🚒 El Farolero",
        colorPlaceholder: "#4a5568",
        dialogos: [
            "—Buenos días. ¿Por qué acabas de apagar tu farol? —preguntó el Principito.",
            "—Es la consigna —respondió el farolero—. Buenos días.",
            "—¿Qué es la consigna?",
            "—Apagar mi farol. Buenas noches —y volvió a encenderlo.",
            "—¿Por qué lo vuelves a encender?",
            "—Es la consigna. Mi planeta da una vuelta completa por minuto y ya no tengo ni un segundo de descanso. ¡Enciendo y apago una vez por minuto!",
            "El Principito continuó su viaje pensando: 'Este hombre sería despreciado por los otros... sin embargo, es el único que no me parece ridículo'."
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