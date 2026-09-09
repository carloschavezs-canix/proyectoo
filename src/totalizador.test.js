import { totalNeto, descuento } from "./totalizador";

describe("Totalizador de venta", () => 
  {
  test("calcula el precio neto de la compra", () => {
    expect(totalNeto(20, 3)).toBe(60);
  });

  test("aplica 3% de descuento cuando la compra es de 1000", () => {
    expect(descuento(1000)).toBe(30);
  });

  test("aplica 5% de descuento cuando la compra es de 3000", () => {
  expect(descuento(3000)).toBe(150);
});

});