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

// Función async para iniciar el proceso
async function iniciarProcesoAsync() {
    const numeros = [100, 200, 300, 400, 500];
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Iniciando procesamiento con async/await...</p>';
    
    try {
        const mensaje = await procesarLista(numeros);
        resultadoDiv.innerHTML += `<p style="color: green; font-weight: bold;">${mensaje}</p>`;
        console.log(mensaje);
    } catch (error) {
        resultadoDiv.innerHTML += `<p style="color: red;">Error: ${error}</p>`;
        console.error("Error:", error);
    }
}