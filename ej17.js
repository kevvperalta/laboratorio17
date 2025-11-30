// Funcion con promesa 
function cargarMensaje() {
    return new Promise((resolve) => {
        console.log("iniciando carga del mensaje...");
        
        setTimeout(() => {
            const mensaje = "Mensaje cargado";
            resolve(mensaje);
        }, 1000); // 1 segundo
    });
}

// Función async para ejecutar desde el boton
async function cargarMensajeAsync() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Cargando mensaje, por favor espere</p>';
    
    try {
        const mensaje = await cargarMensaje();
        resultadoDiv.innerHTML = `<p style="color: green; font-weight: bold;">${mensaje}</p>`;
        console.log(mensaje);
    } catch (error) {
        resultadoDiv.innerHTML = `<p style="color: red;">Error: ${error}</p>`;
        console.error("Error:", error);
    }
}