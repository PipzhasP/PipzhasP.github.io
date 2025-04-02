const formularioDomicilio = document.getElementById('formulario-domicilio');
const metodoPago = document.getElementById('metodo-pago');
const pagoTarjeta = document.getElementById('pago-tarjeta');
const enviar = document.getElementById('enviar');
const confirmacion = document.getElementById('confirmacion');

// Mostrar u ocultar campos de tarjeta según el método de pago
metodoPago.addEventListener('change', () => {
    if (metodoPago.value === 'Tarjeta') {
        pagoTarjeta.style.display = 'block';
    } else {
        pagoTarjeta.style.display = 'none';
    }
});

enviar.addEventListener('click', (e) => {
    e.preventDefault();

    // Obtener la hora actual
    const ahora = new Date();
    const horas = ahora.getHours();

    // Verificar si la hora está entre las 9:00 AM y las 9:00 PM
    if (horas >= 9 && horas < 21) {
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;
        const calle = document.getElementById('calle').value;
        const colonia = document.getElementById('colonia').value;
        const municipio = document.getElementById('municipio').value;
        const estado = document.getElementById('estado').value;
        const metodo = metodoPago.value;

        // Verificar los campos requeridos
        if (nombre && telefono && direccion && calle && colonia && municipio && estado && metodo) {
            if (metodo === 'Tarjeta') {
                const numTarjeta = document.getElementById('num-tarjeta').value;
                const fechaExp = document.getElementById('fecha-exp').value;
                const cvv = document.getElementById('cvv').value;

                // Validar que los campos de tarjeta sean números
                const tarjetaValida = /^\d{16}$/.test(numTarjeta);
                const fechaValida = /^\d{2}\/\d{2}$/.test(fechaExp);
                const cvvValido = /^\d{3}$/.test(cvv);

                if (tarjetaValida && fechaValida && cvvValido) {
                    // Guardar los datos en localStorage
                    localStorage.setItem('nombre', nombre);
                    localStorage.setItem('telefono', telefono);
                    localStorage.setItem('direccion', direccion);
                    localStorage.setItem('calle', calle);
                    localStorage.setItem('colonia', colonia);
                    localStorage.setItem('municipio', municipio);
                    localStorage.setItem('estado', estado);
                    localStorage.setItem('metodoPago', metodo);
                    localStorage.setItem('numTarjeta', numTarjeta);
                    localStorage.setItem('fechaExp', fechaExp);
                    localStorage.setItem('cvv', cvv);

                    // Redirigir a ticket.html
                    window.location.href = 'ticket.html';
                } else {
                    confirmacion.textContent = 'Por favor, completa correctamente los campos de la tarjeta.';
                }
            } else {
                // Guardar los datos en localStorage
                localStorage.setItem('nombre', nombre);
                localStorage.setItem('telefono', telefono);
                localStorage.setItem('direccion', direccion);
                localStorage.setItem('calle', calle);
                localStorage.setItem('colonia', colonia);
                localStorage.setItem('municipio', municipio);
                localStorage.setItem('estado', estado);
                localStorage.setItem('metodoPago', metodo);

                // Redirigir a ticket.html
                window.location.href = 'ticket.html';
            }
        } else {
            confirmacion.textContent = 'Por favor, completa toda la información requerida.';
        }
    } else {
        confirmacion.textContent = 'Gracias por su preferencia, lo esperamos en horario laboral (9:00 AM - 9:00 PM).';
    }
});

