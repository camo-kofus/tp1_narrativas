/* ============================================================
   CONFIGURACIÓN — es lo único que necesitás editar para
   agregar/mover/enlazar planetas o cambiar el texto de la burbuja.
   ============================================================ */
const config = {
 
  principito: {
    // Texto que aparece en el globo de pensamiento al pasar el cursor
    pensamiento: "Adiós"
  },
 
  // x / y en porcentaje respecto a #capa-planetas (0–100)
  // href: null => planeta decorativo (sin link) | "pagina.html" => nivel 2
  planetas: [
    { id: "p1", gif: "https://res.cloudinary.com/xoktvuw1/image/upload/v1790127077/image2.gif", x: 30, y: 12, size: 130, href: null,               alt: "Planeta" },
    { id: "p2", gif: "https://res.cloudinary.com/xoktvuw1/image/upload/v1790127077/image2.gif", x: 62, y: 10, size: 99, href: null,               alt: "Planeta" },
    { id: "p3", gif: "https://res.cloudinary.com/xoktvuw1/image/upload/v1790127077/image2.gif", x: 18, y: 24, size: 100, href: "negocios.html", alt: "El hombre de negocios" },
    { id: "p4", gif: "https://res.cloudinary.com/xoktvuw1/image/upload/v1790127077/image2.gif", x: 90, y: 40, size: 145, href: "farolero.html",     alt: "El farolero" },
    { id: "p5", gif: "https://res.cloudinary.com/xoktvuw1/image/upload/v1790127077/image2.gif", x: 22, y: 62, size: 168, href: null,               alt: "Planeta" },
    { id: "p6", gif: "https://res.cloudinary.com/xoktvuw1/image/upload/v1790127077/image2.gif", x: 12, y: 76, size: 110, href: null,               alt: "Planeta" },
    { id: "p7", gif: "https://res.cloudinary.com/xoktvuw1/image/upload/v1790127077/image2.gif", x: 46, y: 80, size: 150, href: "geografo.html",     alt: "El geógrafo" },
    { id: "p8", gif: "https://res.cloudinary.com/xoktvuw1/image/upload/v1790127077/image2.gif", x: 76, y: 67, size: 96, href: null,               alt: "Planeta" }
  ]
};
 
/* ============================================================
   Generación de planetas a partir de config.planetas
   ============================================================ */
function crearPlaneta(datos) {
  const esLink = Boolean(datos.href);
  const el = document.createElement(esLink ? "a" : "div");
 
  el.className = "planeta" + (esLink ? "" : " decorativo");
  el.id = datos.id;
  el.style.left = datos.x + "%";
  el.style.top = datos.y + "%";
  el.style.width = datos.size + "px";
 
  if (esLink) {
    el.href = datos.href;
  }
 
  const img = document.createElement("img");
  img.src = datos.gif;
  img.alt = datos.alt || "";
  el.appendChild(img);
 
  return el;
}
 
function renderPlanetas() {
  const capa = document.getElementById("capa-planetas");
  config.planetas.forEach(datos => {
    capa.appendChild(crearPlaneta(datos));
  });
}
 
/* ============================================================
   Globo de pensamiento del Principito (hover / focus)
   ============================================================ */
function iniciarBurbuja() {
  const principito = document.getElementById("principito");
  const burbuja = document.getElementById("burbuja");
 
  burbuja.textContent = config.principito.pensamiento;
 
  const mostrar = () => { burbuja.hidden = false; };
  const ocultar = () => { burbuja.hidden = true; };
 
  principito.addEventListener("mouseenter", mostrar);
  principito.addEventListener("mouseleave", ocultar);
  principito.addEventListener("focus", mostrar);
  principito.addEventListener("blur", ocultar);
}
 
/* ============================================================
   Init
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderPlanetas();
  iniciarBurbuja();
});
