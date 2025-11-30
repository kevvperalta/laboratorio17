// captura el error inicial

function funcionNivel2() {
    try {
        // ReferenceError
        console.log(variableNoDefinida);
    } catch (error) {
        document.getElementById('resultado').innerHTML += 
            `<p>Nivel 2 atrapo el error: ${error.message}</p>`;
        console.log(`Nivel 2 atrapo el error: ${error.message}`);
        
        // Volver a lanzar el error
        throw error;
    }
}

// llama a nivel 2

function funcionNivel1() {
    try {
        funcionNivel2();
    } catch (error) {
        document.getElementById('resultado').innerHTML += 
            `<p>Nivel 1 recibio el error: ${error.message}</p>`;
        console.log(`Nivel 1 recibio el error: ${error.message}`);
        
        // Volver a lanzar el error
        throw error;
    }
}

// Nivel superior y captura final

try {
    funcionNivel1();
} catch (error) {
    document.getElementById('resultado').innerHTML += 
        `<p style="color: red; font-weight: bold;">error final capturado en el nivel superior: ${error.message}</p>`;
    console.log(`ERROR FINAL capturado en el nivel superior: ${error.message}`);
}