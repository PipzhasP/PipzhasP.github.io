// pdfGenerator.js
(function() {
  /**
   * Función que genera un PDF con el contenido del elemento con id "result",
   * preservando los saltos de línea.
   */
  function generatePDF() {
    // Verificamos que exista el elemento que contiene los resultados.
    const resultElem = document.getElementById("result");
    if (!resultElem) {
      alert("No se encontraron resultados para generar el PDF.");
      return;
    }
    
    // Extraemos el contenido HTML
    let resultHTML = resultElem.innerHTML;
    // Reemplazamos cualquier etiqueta <br> (o variantes) por saltos de línea
    resultHTML = resultHTML.replace(/<br\s*[\/]?>/gi, "\n");
    
    // Creamos un div temporal y asignamos el HTML modificado
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = resultHTML;
    // Extraemos el texto plano — esto incluirá los "\n" que definimos.
    const resultText = tempDiv.textContent || tempDiv.innerText || "";
    
    // Inicializamos el documento PDF utilizando jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    // Usamos splitTextToSize para dividir el texto en líneas, respetando los saltos de línea.
    const lines = doc.splitTextToSize(resultText, 180); // Ajusta el ancho si es necesario.
    doc.text(lines, 10, 10);
    
    // Guardamos el PDF con el nombre deseado.
    doc.save("resultado_test_metal.pdf");
  }
  
  // Buscamos el botón en el DOM y atamos el evento click.
  const downloadBtn = document.getElementById("downloadPDFBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", generatePDF);
  } else {
    console.warn("No se encontró el botón de descarga de PDF con id 'downloadPDFBtn'.");
  }
  
  // Exponemos la función para poder llamarla desde otros scripts.
  window.generatePDF = generatePDF;
})();
