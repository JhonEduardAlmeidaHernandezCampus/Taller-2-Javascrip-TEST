import { mayores } from "../ejercicios/ejercicio5.js";

describe("test del archivo ejercicio5.js", () => {

    test("la funcion devuelve si el numero 1 es menor al numero 2 devuelve una suma y la diferencia", () => {
        
        let num1Menor = mayores(5, 7)
        
        expect(num1Menor).toBe(`El producto de los 2 numeros es 35 y la division entre los 2 da 0.7`);
    })

    test("la funcion devuelve si el numero 2 es mayor al numero 1 devuelve el producto y la division", () => {
        
        let num2Mayor = mayores(7, 5)
        
        expect(num2Mayor).toBe(`La suma de los numeros es 12 y la diferencia es 2`);
    })
})