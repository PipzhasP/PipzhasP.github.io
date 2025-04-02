// Obtener referencias a los elementos del DOM
const formulario = document.getElementById('formulario');
const apartado = document.getElementById('apartado');
const infoApartado = document.getElementById('info-apartado');
const explorar = document.getElementById('explorar');
const comprar = document.getElementById('comprar');
const contacto = document.getElementById('contacto');

// Mostrar información basada en el apartado seleccionado
apartado.addEventListener('change', () => {
    switch (apartado.value) {
        case 'generos':
            infoApartado.innerHTML = '<p>Explora géneros como Heavy Metal, Power Metal, Doom Metal, y más.</p>';
            break;
        case 'historia':
            infoApartado.innerHTML = '<p>Descubre la rica historia del metal, desde Black Sabbath hasta las bandas modernas.</p>';
            break;
        case 'eventos':
            infoApartado.innerHTML = '<p>Infórmate sobre eventos legendarios como Wacken Open Air y Hellfest.</p>';
            break;
        case 'mercancia':
            infoApartado.innerHTML = '<p>Adquiere productos exclusivos: playeras, discos, pines y más.</p>';
            break;
        case 'galeria':
            infoApartado.innerHTML = '<p>Disfruta de una galería de imágenes icónicas del metal.</p>';
            break;
        default:
            infoApartado.innerHTML = '<p>Selecciona un apartado para más información.</p>';
    }
});

// Lógica del botón "Explorar Mundo Metal"
explorar.addEventListener('click', (e) => {
    e.preventDefault();
    alert('¡Explora el fascinante mundo del metal y descubre todos sus secretos!');
});

// Lógica del botón "Comprar Mercancía"
comprar.addEventListener('click', (e) => {
    e.preventDefault();
    if (contacto.value === '') {
        alert('Por favor, selecciona una forma de contacto antes de continuar.');
    } else {
        alert(`Gracias por tu interés en la mercancía. Nos pondremos en contacto contigo a través de ${contacto.value}.`);
    }
});

// Estilo adicional para animar el encabezado
document.querySelector('h1').addEventListener('mouseover', () => {
    document.querySelector('h1').style.color = 'gold';
    document.querySelector('h1').style.textShadow = '0 0 10px #FFD700';
});
document.querySelector('h1').addEventListener('mouseout', () => {
    document.querySelector('h1').style.color = '';
    document.querySelector('h1').style.textShadow = '';
});
