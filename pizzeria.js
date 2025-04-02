const formulario = document.getElementById('formulario');
const boton = document.getElementById('boton');
const redirigir = document.getElementById('redirigir');
const totalElement = document.getElementById('total');

boton.addEventListener('click', (e) => {
    e.preventDefault();

    const ahora = new Date();
    const horas = ahora.getHours();

    if (horas >= 8 && horas < 21) {
        const pizza1 = document.getElementById('pizza1').value;
        const pizza2 = document.getElementById('pizza2').value;
        const pizza3 = document.getElementById('pizza3').value;

        const precios = {
            'Mexicana': 10,
            'Pepperoni': 12,
            'Hawaiana': 11
        };

        const total = precios[pizza1] + precios[pizza2] + precios[pizza3];
        totalElement.textContent = `Total: $${total}`;

        localStorage.setItem('pizza1', pizza1);
        localStorage.setItem('pizza2', pizza2);
        localStorage.setItem('pizza3', pizza3);
        localStorage.setItem('total', total);
    } else {
        totalElement.textContent = 'Gracias por su preferencia, lo esperamos en horario laboral (9:00 PM).';
    }
});

redirigir.addEventListener('click', (e) => {
    e.preventDefault();

    const ahora = new Date();
    const horas = ahora.getHours();
    if (horas >= 8 && horas < 21) {
        window.location.href = 'pagina-domicilio.html';
    } else {
        totalElement.textContent = 'Gracias por su preferencia, lo esperamos en horario laboral (9:00 PM).';
    }
});
