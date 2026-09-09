import { totalNeto } from "./totalizador";

describe("Totalizador de venta", () => {
  test("calcula el precio neto de la compra", () => {
    expect(totalNeto(20, 3)).toBe(60);
  });
});