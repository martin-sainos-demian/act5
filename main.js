document.getElementById("pdf").onclick = () => {
    const inputs = {
        "proyecto": document.getElementById('proyecto').value,
        "numero": document.getElementById('numero').value,
        "solicitante del cambio": document.getElementById('solicitante').value,
        "fecha": document.getElementById('fecha').value,
        "cambio solicitado": document.getElementById('cambio').value,
        "analizador del cambio": document.getElementById('analizador').value,
        "fecha de analisis": document.getElementById('fecha_analisis').value,
        "componentes afectados": document.getElementById('componentes').value,
        "componentes asociados": document.getElementById('componentes_asociados').value,
        "valoracion del cambio": document.getElementById('valoracion').value,
        "prioridad del cambio": document.getElementById('prioridad').value,
        "implementacion del cambio": document.getElementById('implementacion').value,
        "esfuerzo estimado": document.getElementById('esfuerzo').value,
        "fecha para equipo SGA app": document.getElementById('fecha_equipo').value,
        "decision": document.getElementById('decision').value,
        "fecha de desicion CCB": document.getElementById('fecha_decision').value,
        "implementador del cambio": document.getElementById('implementador_cambio').value,
        "fecha de cambio": document.getElementById('fecha_cambio').value,
        "fecha de envio a QA": document.getElementById('fecha_envio_qa').value,
        "desicion de QA": document.getElementById('decision_qa').value,
        "fecha de envio a CM": document.getElementById('fecha_envio_cm').value,
        "comentarios": document.getElementById('comentarios').value
      };
      console.log(inputs)

      jsonToPdf(inputs)
}

function jsonToPdf(jsonData) {
    // create a new jsPDF instance
    const doc = new jsPDF();
    
    let jsonString = ""

    for (let x in jsonData) {
        console.log(x + ": "+ jsonData[x])
        jsonString += x + ": "+ jsonData[x]
        jsonString += "\n"
     }     


    // add the JSON data to the PDF document
    doc.text(jsonString, 10, 10);
  
    // save the PDF file
    doc.save('change.pdf');
  }