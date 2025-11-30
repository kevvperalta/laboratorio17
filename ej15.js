// Función  con promesa
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

// Probar la funcion
function probarDivisiones() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Probando divisiones con promesas...</p>';
    
    // División valida
    dividirAsync(20, 4)
        .then(resultado => {
            resultadoDiv.innerHTML += `<p>20 / 4 = ${resultado}</p>`;
            console.log("20 / 4 =", resultado);
        })
        .catch(error => {
            resultadoDiv.innerHTML += `<p>Error: ${error.message}</p>`;
            console.log("Error:", error.message);
        });
    
    // División por cero
    dividirAsync(20, 0)
        .then(resultado => {
            resultadoDiv.innerHTML += `<p>20 / 0 = ${resultado}</p>`;
            console.log("20 / 0 =", resultado);
        })
        .catch(error => {
            resultadoDiv.innerHTML += `<p>Error: ${error.message}</p>`;
            console.log("Error:", error.message);
        });
}

// Ejecutando
probarDivisiones();