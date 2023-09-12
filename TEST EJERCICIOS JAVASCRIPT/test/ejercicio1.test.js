import { promedio } from '../ejercicios/ejercicio1.js'

describe("test del archivo ejercicio1.js", () => {

    test("la funcion promedio devuelve si el estudiante esta en estado 'Estudie'", () => {
        let notas = promedio(1,2,3)
        expect(notas).toBe("Estudie más");
    })

    test("la funcion promedio devuelve si el estudiante esta en estado 'Becado'", () => {
        let notas = promedio(5,5,5)
        expect(notas).toBe("Becado mi papá");
    })
})