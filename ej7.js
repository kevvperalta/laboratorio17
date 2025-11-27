function procesarDatos() {
    const resultadoDiv = document.getElementById('resultado');
    
    try {
        // Provocar un TypeError
        let objeto = null;
        let valor = objeto.propiedad;
        
    } catch (error) {
        // Verificamos el tipo de error con instanceof
        if (error instanceof TypeError) {
            resultadoDiv.innerHTML = `
                <p>Se produjo un TypeError</p>
                <p>Mensaje: ${error.message}</p>
            `;
            console.log("Se produjo un TypeError:", error.message);

        } else if (error instanceof ReferenceError) {
            resultadoDiv.innerHTML = `
                <p>Se produjo un ReferenceError</p>
                <p>Mensaje: ${error.message}</p>
            `;
            console.log("Se produjo un ReferenceError:", error.message);
            
        } else {
            resultadoDiv.innerHTML = `
                <p>Se produjo un error de tipo: ${error.name}</p>
                <p>Mensaje: ${error.message}</p>
            `;
            console.log(`Se produjo un error de tipo ${error.name}:`, error.message);
        }
    }
}

// ejecutamos
procesarDatos();