// Funcion con promesa
function dividirAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b == 0) {
                reject(new Error("No se puede dividir entre cero"));
            } else {
                resolve(a / b);
            }
        }, 1500); // 1.5 segundos
    });
}

// Función para probar divisiones
async function probarDivisionesAsync() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Probando divisiones con async/await...</p>';
    
    try {
        // División válida
        const resultado1 = await dividirAsync(15, 3);
        resultadoDiv.innerHTML += `<p>15 / 3 = ${resultado1}</p>`;
        console.log("15 / 3 =", resultado1);
        
        // División por cero (lanzara un error)
        const resultado2 = await dividirAsync(15, 0);
        resultadoDiv.innerHTML += `<p>15 / 0 = ${resultado2}</p>`;
        console.log("15 / 0 =", resultado2);
        
    } catch (error) {
        resultadoDiv.innerHTML += `<p>Error: ${error.message}</p>`;
        console.log("Error:", error.message);
    }
}

// Ejecutar pruebas
probarDivisionesAsync();