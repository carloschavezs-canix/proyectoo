export function totalNeto(cantidad, precio) {
  return cantidad * precio;
}

export function descuento(total) {

   if (total >= 30000) {
    return Math.round(total * 0.15 * 100) / 100;
  }
  if (total >= 10000) {
    return Math.round(total * 0.10 * 100) / 100;
  }
  if (total >= 7000) {
    return Math.round(total * 0.07 * 100) / 100;
  }

  if (total >= 3000) {
    return Math.round(total * 0.05 * 100) / 100;
  }

  if (total >= 1000) {
    return Math.round(total * 0.03 * 100) / 100;
  }

  return 0;
}
export function impuesto(total, estado) {
  if (estado === "UT") {
    return Math.round(total * 0.0665 * 100) / 100;
  }

  if (estado === "TX") {
    return Math.round(total * 0.0625 * 100) / 100;
  }

  return 0;
}