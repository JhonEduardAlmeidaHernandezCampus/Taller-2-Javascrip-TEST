import { voltaje } from '../ejercicios/ejercicio3.js'

describe("test del archivo ejrecicio3.js", () => {

    test("la funcion de voltaje devuelve la cantidad de voltaje del circuito", () => {
        
        let voltajeCantidad = voltaje(1, 5)
        expect(voltajeCantidad).toBe(`${voltajeCantidad}`);
    })
})