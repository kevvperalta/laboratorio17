// Función para validar edad
function validarEdad(edad) {
    if (isNaN(edad) || edad < 0) {
        throw new Error("Edad inválida");
    }
    return `Edad válida: ${edad} años`;
}

// Pruebas de la función
function probarValidaciones() {
    const pruebas = [25, -5, "veinte", 0, 150];
    const resultadoDiv = document.getElementById('resultado');
    
    pruebas.forEach(edad => {
        try {
            let mensaje = validarEdad(edad);
            resultadoDiv.innerHTML += `<p>${mensaje}</p>`;
            console.log(mensaje);
        } catch (error) {
            resultadoDiv.innerHTML += `<p>Error con edad ${edad}: ${error.message}</p>`;
            console.log(`Error con edad ${edad}:`, error.message);
        }
    });
}

// ejecutar pruebas
probarValidaciones();