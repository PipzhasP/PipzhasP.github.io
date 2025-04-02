document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const delivery = form.delivery.value;
    const payment = form.payment.value;

    // Obtener pizzas y complementos seleccionados
    const pizzas = Array.from(form.querySelectorAll('input[name="pizza"]:checked')).map(input => input.value);
    const complements = Array.from(form.querySelectorAll('input[name="complement"]:checked')).map(input => input.value);

    let orderSummary = `Nombre: ${name}<br>Teléfono: ${phone}<br>Método de Pago: ${payment}<br>`;
    orderSummary += `Pizzas: ${pizzas.join(', ')}<br>`;
    orderSummary += `Complementos: ${complements.join(', ')}<br>`;
    
    if (delivery === "domicilio") {
        const municipio = form.municipio.value;
        const calle = form.calle.value;
        const colonia = form.colonia.value;
        orderSummary += `Dirección: ${municipio}, ${calle}, ${colonia}<br>`;
    } else {
        orderSummary += "Consumo Local<br>";
    }

    document.getElementById("orderSummary").innerHTML = orderSummary;
    document.getElementById("summary").style.display = "block";
});
document.querySelectorAll('input[name="delivery"]').forEach((input) => {
    input.addEventListener("change", function () {
        const addressSection = document.getElementById("address");
        addressSection.style.display = this.value === "domicilio" ? "block" : "none";
    });
});
