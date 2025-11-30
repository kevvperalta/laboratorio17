// Funcion con promesa
function cargarMensaje() {
    return new Promise((resolve) => {
        console.log("Iniciando carga del mensaje...");
        
        setTimeout(() => {
            const mensaje = "Mensaje cargado";
            resolve(mensaje);
        }, 1000); // 1 segundo
    });
}

// Función para ejecutar
function cargarMensajePromesa() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Cargando mensaje, por favor espere...</p>';
    
    cargarMensaje()
        .then(mensaje => {
            resultadoDiv.innerHTML = `<p style="color: green; font-weight: bold;">${mensaje}</p>`;
            console.log(mensaje);
        })
        .catch(error => {
            resultadoDiv.innerHTML = `<p style="color: red;">Error: ${error}</p>`;
            console.error("Error:", error);
        });
}