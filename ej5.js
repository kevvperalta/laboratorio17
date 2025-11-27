try {
    //asignando console.log a null
    let consoleBackup = console.log;
    console.log = null;
    console.log("Este mensaje fallará"); // TypeError
} catch (error) {
    document.getElementById('resultado').innerHTML += `<p>falló</p>`;
    console.log("falló");
} finally {
    document.getElementById('resultado').innerHTML += `<p>siempre se ejecuta</p>`;
    console.log("siempre se ejecuta");
}