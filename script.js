import { barcelona, roma, paris, londres } from "./ciudades.js";

let enlaces = document.querySelectorAll("a");
let tituloElement = document.getElementById("titulo");
let subtituloElement = document.getElementById("subtitulo");
let parrafoElement = document.getElementById("parrafo");

enlaces.forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    enlaces.forEach(function (enlace) {
      enlace.classList.remove("active");
    });

    this.classList.add("active");
    let contenido = obtenerContenido(this.textContent, enlace);
    tituloElement.innerHTML = contenido.titulo;
    subtituloElement.innerHTML = contenido.subtitulo;
    parrafoElement.innerHTML = contenido.parrafo;
  });
});
function obtenerContenido(enlace) {
  let contenido = {
    Barcelona: barcelona,
    Roma: roma,
    París: paris,
    Londres: londres,
  };
  return contenido[enlace];
}
