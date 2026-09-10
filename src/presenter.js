import {
  totalNeto,
  descuento,
  impuesto,
  calcularTotal
} from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");
const cancelar = document.querySelector("#cancelar-button");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidadIngresada = Number(cantidad.value);
  const precioIngresado = Number(precio.value);
  const estadoIngresado = estado.value;

  try {
    const neto = totalNeto(cantidadIngresada, precioIngresado);
    const descuentoAplicado = descuento(neto);
    const impuestoAplicado = impuesto(
      neto - descuentoAplicado,
      estadoIngresado
    );
    const total = calcularTotal(
      cantidadIngresada,
      precioIngresado,
      estadoIngresado
    );

    div.innerHTML = `
      <h2>Resumen de compra</h2>
      <p>Precio neto: $${neto.toFixed(2)}</p>
      <p>Descuento: $${descuentoAplicado.toFixed(2)}</p>
      <p>Impuesto: $${impuestoAplicado.toFixed(2)}</p>
      <h3>Total: $${total.toFixed(2)}</h3>
      <button type="button" id="confirmar-button">
        Confirmar compra
      </button>
    `;

    const confirmar = document.querySelector("#confirmar-button");

    confirmar.addEventListener("click", () => {
      div.innerHTML = `
        <h2>Compra confirmada</h2>
        <p>Total pagado: $${total.toFixed(2)}</p>
      `;
    });

  } catch (error) {
    div.innerHTML = "<p>Error: " + error.message + "</p>";
  }
});

cancelar.addEventListener("click", () => {
  form.reset();
  div.innerHTML = "";
});