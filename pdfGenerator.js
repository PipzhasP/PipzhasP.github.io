
(function () {
    /**
     * Función que genera un PDF con respuestas enumeradas,
     * cada una con doble salto de línea y líneas divisorias.
     */
    function generatePDF() {
      const resultElem = document.getElementById("result");
      if (!resultElem) {
        alert("No se encontraron resultados para generar el PDF.");
        return;
      }
  
      // Extraemos y limpiamos el contenido HTML
      let resultHTML = resultElem.innerHTML;
      resultHTML = resultHTML.replace(/<br\s*[\/]?>/gi, "\n"); // Convertir <br> en saltos de línea
  
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = resultHTML;
      const resultText = tempDiv.textContent || tempDiv.innerText || "";
  
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4"
      });
  
      // Título del reporte
      doc.setFont("helvetica", "bold");
      doc.setFontSize(16);
      doc.text("Reporte de Respuestas", 105, 20, { align: "center" });
  
      doc.setLineWidth(0.5);
      doc.line(10, 25, 200, 25);
  
      // Contenido de respuestas
      doc.setFont("times", "normal");
      doc.setFontSize(12);
      const respuestas = resultText.split(/\n+/).filter(r => r.trim() !== ""); // Ignorar líneas vacías
  
      let y = 35; // Posición inicial
      const espacioEntreRespuestas = 15;
  
      respuestas.forEach((respuesta, index) => {
        // Si estamos cerca del final de la hoja, saltamos a la siguiente
        if (y > 270) {
          doc.addPage();
          y = 20;
        }
  
        const texto = `Respuesta ${index + 1}: ${respuesta.trim()}`;
        doc.text(texto, 10, y);
        y += 8; // Espacio después del texto
  
        doc.setLineWidth(0.2);
        doc.line(10, y, 200, y); // Línea debajo
        y += espacioEntreRespuestas - 8; // Espacio restante para completar 15
      });
  
      // Pie de página con numeración
      const pageCount = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFont("helvetica", "italic");
        doc.setFontSize(10);
        doc.text(`Página ${i} de ${pageCount}`, 200, 287, { align: "right" });
      }
  
      doc.save("respuestas_en_linea.pdf");
    }
  
    // Enlazar botón
    const downloadBtn = document.getElementById("downloadPDFBtn");
    if (downloadBtn) {
      downloadBtn.addEventListener("click", generatePDF);
    } else {
      console.warn("No se encontró el botón con id 'downloadPDFBtn'.");
    }
  
    // Exponer la función
    window.generatePDF = generatePDF;
  })();
  