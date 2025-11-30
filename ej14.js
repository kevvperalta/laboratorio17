// Funcion con promesa
function cargarUsuario() {
    return new Promise((resolve) => {
        console.log("Solicitando datos del usuario...");
        
        // Tiempo entre 800ms y 1500ms
        const tiempoAleatorio = Math.floor(Math.random() * (1500 - 800 + 1)) + 800;
        
        setTimeout(() => {
            const usuario = {
                id: Math.floor(Math.random() * 1000) + 1,
                nombre: "kevin"
            };
            resolve(usuario);
        }, tiempoAleatorio);
    });
}

// funcion para ejecutar desde el botón
function cargarUsuarioPromesa() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Cargando usuario, por favor espere...</p>';
    
    cargarUsuario()
        .then(usuario => {
            const mensaje = `Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`;
            resultadoDiv.innerHTML = `<p style="color: blue; font-weight: bold;">${mensaje}</p>`;
            console.log(mensaje);
        })
        .catch(error => {
            resultadoDiv.innerHTML = `<p style="color: red;">Error: ${error}</p>`;
            console.error("Error:", error);
        });
}