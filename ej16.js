// Funcion con promesa
function procesarLista(numeros) {
    return new Promise((resolve) => {
        let procesados = 0;
        const total = numeros.length;
        
        if (total === 0) {
            resolve("Proceso completado");
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
                    resolve("Proceso completado");
                }
            }, tiempo);
        });
    });
}

// Función para iniciar el proceso
function iniciarProcesoPromesa() {
    const numeros = [10, 20, 30, 40, 50];
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Iniciando procesamiento con promesas...</p>';
    
    procesarLista(numeros)
        .then(mensaje => {
            resultadoDiv.innerHTML += `<p style="color: green; font-weight: bold;">${mensaje}</p>`;
            console.log(mensaje);
        })
        .catch(error => {
            resultadoDiv.innerHTML += `<p style="color: red;">Error: ${error}</p>`;
            console.error("Error:", error);
        });
}