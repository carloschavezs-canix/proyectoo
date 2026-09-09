export function totalNeto(cantidad, precio) {
  return cantidad * precio;
}

export function descuento(total) {
  if (total >= 1000) {
    return total * 0.03;
  }

  return 0;
}