try {
    // JSON inválido - falta comillas 
    let textoJSON = "{nombre: 'Juan', edad: 25}";
    let objeto = JSON.parse(textoJSON); // Esto generara SyntaxError
    console.log("Objeto parseado:", objeto);
} catch (error) {
    // mostrar información del error
    document.getElementById('resultado').innerHTML = `
        <p><strong>Nombre del error:</strong> ${error.name}</p>
        <p><strong>Mensaje del error:</strong> ${error.message}</p>
    `;
    
    console.log("Nombre del error:", error.name);
    console.log("Mensaje del error:", error.message);
}