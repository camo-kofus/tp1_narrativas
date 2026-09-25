// --- BASE DE DATOS DE ESTE PLANETA ---
const capitulo = {
    titulo: "Planeta del Hombre de Negocios",
    cita: "Sigamos adelante",
    dialogos: [
        "—¡Tres y dos cinco! Cinco y siete doce... ¡Buen día! El juego no se detiene.",
        "—¿Tres y dos cinco? ¿Cinco millones de qué? —preguntó el Principito.",
        "—De qué? ¿De estrellas? Millones de esas pequeñas cosas que se ven a veces en el cielo.",
        "—¿Y qué haces tú con cinco millones de estrellas?",
        "—Nada. Las poseo. Soy un hombre serio y las cuento y las recuento. Es difícil, ¡pero soy un hombre de bien!",
        "—Yo —dijo el Principito— tengo una flor a la que riego todos los días. Soy útil para ella. Pero tú... tú no eres útil para las estrellas.",
        "El Principito se marchó con paso firme, dejando al hombre de negocios sumido en sus cuentas..."
    ]
};

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
