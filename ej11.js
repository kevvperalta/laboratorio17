// Función  con callback
function dividirAsync(a, b, callback) {
    setTimeout(() => {
        if (b == 0) {
            callback(new Error("No se puede dividir entre cero"), null);
        } else {
            callback(null, a / b);
        }
    }, 1500); // 1.5 segundos
}

// probamos
function probarDivision() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '<p>Probando divisiones...</p>';
    
    // División válida
    dividirAsync(10, 2, (error, resultado) => {
        if (error) {
            resultadoDiv.innerHTML += `<p>Error: ${error.message}</p>`;
            console.log("Error:", error.message);
        } else {
            resultadoDiv.innerHTML += `<p>10 / 2 = ${resultado}</p>`;
            console.log("10 / 2 =", resultado);
        }
    });
    
    // division por cero
    dividirAsync(10, 0, (error, resultado) => {
        if (error) {
            resultadoDiv.innerHTML += `<p>Error: ${error.message}</p>`;
            console.log("Error:", error.message);
        } else {
            resultadoDiv.innerHTML += `<p>10 / 0 = ${resultado}</p>`;
            console.log("10 / 0 =", resultado);
        }
    });
}

// Ejecutamos
probarDivision();