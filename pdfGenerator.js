(function() {
  /**
   * Función que genera un PDF con respuestas enumeradas y cada una bajo una línea.
   */
  function generatePDF() {
    // Verificamos que exista el elemento con los resultados.
    const resultElem = document.getElementById("result");
    if (!resultElem) {
      alert("No se encontraron resultados para generar el PDF.");
      return;
    }
    
    // Extraemos el contenido HTML
    let resultHTML = resultElem.innerHTML;
    // Reemplazamos etiquetas <br> por saltos de línea
    resultHTML = resultHTML.replace(/<br\s*[\/]?>/gi, "\n");
    
    // Convertimos el HTML a texto
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = resultHTML;
    const resultText = tempDiv.textContent || tempDiv.innerText || "";
    
    // Inicializamos el documento PDF utilizando jsPDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4"
    });

    // Estilo: Encabezado
    doc.setFont("helvetica", "bold");
    doc.setFontSize(16);
    doc.text("Reporte de Respuestas", 105, 20, { align: "center" });

    // Estilo: Línea divisoria
    doc.setLineWidth(0.5);
    doc.line(10, 25, 200, 25);

    // Estilo: Contenido con respuestas enumeradas y líneas divisorias
    doc.setFont("times", "normal");
    doc.setFontSize(12);
    const lines = resultText.split("\n"); // Dividimos el texto en líneas por los saltos de línea.
    let y = 35; // Posición inicial en el eje Y
    lines.forEach((line, index) => {
      const text = `Respuesta ${index + 1}: ${line}`; // Enumeramos cada línea con "Respuesta".
      doc.text(text, 10, y);
      y += 10; // Espacio entre cada respuesta.
      doc.setLineWidth(0.2);
      doc.line(10, y - 2, 200, y - 2); // Línea debajo de cada respuesta.
      y += 5; // Espacio adicional después de la línea divisoria.
    });

    // Estilo: Pie de página
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      doc.text(`Página ${i} de ${pageCount}`, 200, 287, { align: "right" });
    }

    // Guardamos el PDF con el nombre deseado.
    doc.save("respuestas_en_linea.pdf");
  }
  
  // Asociamos la función al botón de descarga.
  const downloadBtn = document.getElementById("downloadPDFBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", generatePDF);
  } else {
    console.warn("No se encontró el botón de descarga de PDF con id 'downloadPDFBtn'.");
  }
  
  // Exponemos la función.
  window.generatePDF = generatePDF;
})();
