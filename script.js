let frases = ["te amo", "te adoro", "te necesito", "sos mi todo", "sos increible", "aguante sukuna", "afortunado de tenerte", "la chica mas linda del mundo", "preciosa", "princesa", "mi compañera", "mi futura esposa", "la mujer de mis sueños", "simplemente vos"];
function cambiarFrase() {
    let indiceAleatorio = Math.floor(Math.random() * frases.length);
    document.getElementById("frase").textContent = frases[indiceAleatorio];
}

document.body.addEventListener("click", cambiarFrase);