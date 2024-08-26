
// Función para encriptar el texto
function encriptar() {
    let texto = document.getElementById("inputTexto").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("resultado").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.getElementById("inputTexto").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("resultado").value = textoDesencriptado;
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    let resultado = document.getElementById("resultado");
    navigator.clipboard.writeText(resultado.value).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        alert("Hubo un problema al copiar el texto", err);
    });
}
