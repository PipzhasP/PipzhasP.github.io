// Recuperar datos del domicilio desde localStorage
const nombre = localStorage.getItem('nombre') || "No especificado";
const telefono = localStorage.getItem('telefono') || "No especificado";
const direccion = localStorage.getItem('direccion') || "No especificado";
const calle = localStorage.getItem('calle') || "No especificado";
const colonia = localStorage.getItem('colonia') || "No especificado";
const municipio = localStorage.getItem('municipio') || "No especificado";
const estado = localStorage.getItem('estado') || "No especificado";

// Recuperar las pizzas seleccionadas desde localStorage
const pizza1 = localStorage.getItem('domicilio-pizza1') || "No seleccionada";
const pizza2 = localStorage.getItem('domicilio-pizza2') || "No seleccionada";
const pizza3 = localStorage.getItem('domicilio-pizza3') || "No seleccionada";

// Recuperar los complementos seleccionados desde localStorage
const refresco = localStorage.getItem('domicilio-refresco') === "true" ? "$30" : "No seleccionado";
const papas = localStorage.getItem('domicilio-papas') === "true" ? "$45" : "No seleccionado";
const postre = localStorage.getItem('domicilio-postre') === "true" ? "$55" : "No seleccionado";
const ensalada = localStorage.getItem('domicilio-ensalada') === "true" ? "$35" : "No seleccionado";

// Recuperar el método de pago desde localStorage
const metodoPago = localStorage.getItem('domicilio-metodoPago') || "No especificado";

// Recuperar el total desde localStorage
const total = localStorage.getItem('domicilio-total') || "0";

// Mostrar los datos en el HTML
document.getElementById('domicilio-nombre').textContent = nombre;
document.getElementById('domicilio-telefono').textContent = telefono;
document.getElementById('domicilio-direccion').textContent = direccion;
document.getElementById('domicilio-calle').textContent = calle;
document.getElementById('domicilio-colonia').textContent = colonia;
document.getElementById('domicilio-municipio').textContent = municipio;
document.getElementById('domicilio-estado').textContent = estado;

document.getElementById('domicilio-pizza1').textContent = pizza1;
document.getElementById('domicilio-pizza2').textContent = pizza2;
document.getElementById('domicilio-pizza3').textContent = pizza3;

document.getElementById('domicilio-refresco').textContent = refresco;
document.getElementById('domicilio-papas').textContent = papas;
document.getElementById('domicilio-postre').textContent = postre;
document.getElementById('domicilio-ensalada').textContent = ensalada;

document.getElementById('domicilio-metodoPago').textContent = metodoPago;
document.getElementById('domicilio-total').textContent = total;