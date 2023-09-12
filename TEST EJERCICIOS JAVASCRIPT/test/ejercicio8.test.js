import { perimetro, area } from "../ejercicios/ejercicio8.js";

describe("test del archivo ejercicio8.js", () => {

    test("la funcion devuelve el perimetro del cuadrado", () => {
        
        let total = perimetro(4)
        
        expect(total).toBe(`El perimetro del cuadrado es de 16`);
    })

    test("la funcion devuelve el area del rectangulo", () => {
        
        let total = area(6, 7)
        
        expect(total).toBe(`El area del rectangulo es de 42`);
    })
})