try {
    // Provocar un ReferenceError usando una variable no declarada
    console.log(variableNoDeclarada);
} catch (error) {
    // imprimir información del error en el DOM
    document.getElementById('resultado').innerHTML = `
        <p><strong>Tipo de error:</strong> ${error.name}</p>
        <p><strong>Mensaje:</strong> ${error.message}</p>
        <p><strong>Stack:</strong> ${error.stack}</p>
    `;
}