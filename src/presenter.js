import { calcularTotal } from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadIngresada = Number(cantidad.value);
  const precioIngresado = Number(precio.value);
  const estadoIngresado = estado.value;

  try {
    const resultado = calcularTotal(
      cantidadIngresada,
      precioIngresado,
      estadoIngresado
    );

    div.innerHTML = "<p>Total: $" + resultado + "</p>";
  } catch (error) {
    div.innerHTML = "<p>Error: " + error.message + "</p>";
  }
});