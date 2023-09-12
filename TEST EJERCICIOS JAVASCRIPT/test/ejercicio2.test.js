import { pares } from "../ejercicios/ejercicio2.js"; 

describe("test del archivo ejercicio2.js", () => {

    test("la funcion pares devuelve si el numero es 'par'", () => {
        let numero = pares(2)
        expect(numero).toBe("El numero es par");
    })

    test("la funcion pares devuelve si el numero es 'impar'", () => {
        let numero = pares(3)
        expect(numero).toBe("El numero es impar");
    })
})