const idiomaOrigen = "es";
const textosOriginales = [];

// Guardar los textos originales al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll("body *:not(script):not(style)");
  elementos.forEach(el => {
    if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
      textosOriginales.push(el.textContent.trim());
    } else {
      textosOriginales.push(null);
    }
  });

  const idiomaSelect = document.getElementById("idioma");
  idiomaSelect.addEventListener("change", () => {
    const idiomaDestino = idiomaSelect.value;
    traducirPagina(idiomaDestino);
  });
});

// Función para traducir texto desde español
async function traducirTexto(texto, idiomaDestino) {
  if (idiomaDestino === idiomaOrigen) return texto;

  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(texto)}&langpair=${idiomaOrigen}|${idiomaDestino}`);
    const data = await res.json();
    return data.responseData.translatedText || texto;
  } catch (error) {
    console.error("Error en traducción:", error);
    return texto;
  }
}

// Función para traducir todos los nodos de texto visibles
async function traducirPagina(idiomaDestino) {
  const elementos = document.querySelectorAll("body *:not(script):not(style)");
  
  for (let i = 0; i < elementos.length; i++) {
    const el = elementos[i];
    const textoOriginal = textosOriginales[i];

    if (
      textoOriginal &&
      el.childNodes.length === 1 &&
      el.childNodes[0].nodeType === 3
    ) {
      if (idiomaDestino === idiomaOrigen) {
        el.textContent = textoOriginal;
      } else {
        const traduccion = await traducirTexto(textoOriginal, idiomaDestino);
        el.textContent = traduccion;
      }
    }
  }
}
