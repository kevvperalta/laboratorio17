// Función con callback
function cargarUsuario(callback) {
    console.log("Solicitando datos del usuario...");
    
    // Generar tiempo aleatorio entre 800ms y 1500ms
    const tiempoAleatorio = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
    
    setTimeout(() => {
        // Creando objeto usuario
        const usuario = {
            id: Math.floor(Math.random() * 1000) + 1,
            nombre: "kevin"
        };
        
        callback(usuario);
    }, tiempoAleatorio);
}

//  mostrar el usuario
function mostrarUsuario(usuario) {
    const mensaje = `Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`;
    document.getElementById('resultado').innerHTML = 
        `<p style="color: blue; font-weight: bold;">${mensaje}</p>`;
    console.log(mensaje);
}

//  ejecutar desde el botón
function cargarUsuarioCallback() {
    document.getElementById('resultado').innerHTML = 
        `<p>Cargando usuario, por favor espere...</p>`;
    
    cargarUsuario(mostrarUsuario);
}