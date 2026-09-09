import { totalNeto, descuento, impuesto } from "./totalizador";

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

  test("aplica 7% de descuento cuando la compra es de 7000", () => {
  expect(descuento(7000)).toBe(490);
  });

  test("aplica 10% de descuento cuando la compra es de 10000", () => {
  expect(descuento(10000)).toBe(1000);
  });

  test("aplica 15% de descuento cuando la compra es de 30000", () => {
  expect(descuento(30000)).toBe(4500);
  });

  test("calcula el impuesto de TX", () => {
  expect(impuesto(60, "TX")).toBe(3.75);
  });

  test("calcula el impuesto de UT", () => {
  expect(impuesto(100, "UT")).toBe(6.65);
  });

  test("calcula el impuesto de NV", () => {
  expect(impuesto(100, "NV")).toBe(8);
  });

  test("calcula el impuesto de AL", () => {
  expect(impuesto(100, "AL")).toBe(4);
  });
});