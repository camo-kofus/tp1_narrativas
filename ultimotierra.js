// --- TEXTOS DEL DIÁLOGO ---
// Agregá acá todas las líneas que necesites, una por elemento del array
const dialogos = [
    "El Principito llegó finalmente a la Tierra y se encontró con un curioso animal...",
    "—Ven a jugar conmigo —le propuso el Principito—, estoy tan triste...",
    "—No puedo jugar contigo —dijo el zorro—. No estoy domesticado. Crear lazos significa que nos necesitaremos el uno al otro.",
    "—Ya empiezo a comprender —dijo el Principito—. Hay una flor... creo que ella me ha domesticado.",
    "Al momento de despedirse, el zorro le regaló su gran secreto:",
    "—Adiós —dijo el zorro—. He aquí mi secreto, que no puede ser más simple: solo se ve bien con el corazón. Lo esencial es invisible a los ojos.",
    "—Lo esencial es invisible a los ojos... —repitió el Principito para recordarlo.",
    "Fin de la historia."
];

let dialogoActualIndex = 0;

const cajaDialogo = document.getElementById("cajaDialogo");
const textoDialogo = document.getElementById("textoDialogo");
const instruccionToca = document.getElementById("instruccionToca");
const menuSalida = document.getElementById("menuSalida");

function iniciarDialogo() {
    textoDialogo.innerText = dialogos[0];
    dialogoActualIndex = 1;
}

cajaDialogo.addEventListener("click", function () {
    if (dialogoActualIndex < dialogos.length) {
        textoDialogo.innerText = dialogos[dialogoActualIndex];
        dialogoActualIndex++;

        if (dialogoActualIndex === dialogos.length) {
            instruccionToca.style.display = "none";
            cajaDialogo.style.cursor = "default";
            menuSalida.style.display = "block";
        }
    }
});

iniciarDialogo();