import { factura } from "../ejercicios/ejercicio7"; 

describe("test del archivo ejercicio7.js", () => {

    test("la funcion devuelve el nombre del cliente y el total a pagar", () => {
        
        let facturacion = factura("Jhon", 1000, 2)
        expect(facturacion.message).toBe(`${facturacion.nombre} la cantidad total a pagar es ${facturacion.total}`);
    })
})