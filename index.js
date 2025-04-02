// Selección de los enlaces
const pizzeriaLink = document.querySelector('a[href="pizzeria.html"]');
const proyectoLink = document.querySelector('a[href="metal.html"]');

// Evento para redirigir o realizar una acción cuando se hace clic
pizzeriaLink.addEventListener('click', () => {
    console.log("Se hizo clic en el enlace a la Pizzería");
});

proyectoLink.addEventListener('click', () => {
    console.log("Se hizo clic en el enlace al Proyecto Integral");
});