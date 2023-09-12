import { atletaGanador } from "../ejercicios/ejercicio9.js";

describe("test del archivo ejercicio9.js", () => {

    test("la funcion devuelve si no hay datos", () => {
        
        let data = atletaGanador([]);
        
        expect(data).toBe(`No hay datos`);
    })

    test("La funcion devuelve si el atleta supero el record", () => {
        
        let data = atletaGanador(
            [
                {nombre: 'Jhon', marca: 16}, 
                {nombre: 'Carlos', marca: 22}, 
                {nombre: 'Ricardo', marca: 23}, 
                {nombre: 'Camilo', marca: 18}
            ]
        );
        
        expect(data).toBe(`Ricardo usted rompio el record con una marca de 23 metros y gano 500 millones`);
    })

    test("La funcion devuelve si el atleta gano pero no supero el record", () => {
        
        let data = atletaGanador(
            [
                {nombre: 'Jhon', marca: 13}, 
                {nombre: 'Carlos', marca: 11}, 
                {nombre: 'Ricardo', marca: 12}, 
                {nombre: 'Camilo', marca: 15}
            ]
        );
        
        expect(data).toBe(`Camilo usted gano las olimpiadas con una marca de 15 metros`);
    })
})