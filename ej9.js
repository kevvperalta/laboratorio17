// Funcion con callback
function cargarMensaje(callback) {
    console.log("Iniciando carga del mensaje...");
    
    setTimeout(() => {
        const mensaje = "Mensaje cargado";
        callback(mensaje);
    }, 1000); // 1 segundo
}

// Función para manejar el resultado
function mostrarMensaje(mensaje) {
    document.getElementById('resultado').innerHTML = 
        `<p style="color: green; font-weight: bold;">${mensaje}</p>`;
    console.log(mensaje);
}

// Función para ejecutar desde el botón
function ejecutarCarga() {
    document.getElementById('resultado').innerHTML = 
        `<p>Cargando mensaje, por favor espere...</p>`;
    
    cargarMensaje(mostrarMensaje);
}