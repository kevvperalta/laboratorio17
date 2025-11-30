// Funcion  con callback
function procesarLista(numeros, callbackFinal) {
    let procesados = 0;
    const total = numeros.length;
    
    if (total === 0) {
        callbackFinal("Proceso completado");
        return;
    }
    
    numeros.forEach((numero, index) => {
        // Tiempo entre 500 y 1500 ms
        const tiempo = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
        
        setTimeout(() => {
            console.log(`Procesando ${numero}...`);
            document.getElementById('resultado').innerHTML += 
                `<p>Procesando ${numero}...</p>`;
            
            procesados++;
            
            // Cuando todos ya esten procesados
            if (procesados === total) {
                callbackFinal("Proceso completado");
            }
        }, tiempo);
    });
}

// Funcion para iniciar el proceso
function iniciarProceso() {
    const numeros = [1, 2, 3, 4, 5];
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Iniciando procesamiento...</p>';
    
    procesarLista(numeros, (mensaje) => {
        resultadoDiv.innerHTML += `<p style="color: green; font-weight: bold;">${mensaje}</p>`;
        console.log(mensaje);
    });
}