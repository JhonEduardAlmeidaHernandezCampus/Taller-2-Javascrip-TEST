import { mayorPersona } from "../ejercicios/ejercicio4.js";

describe("test del archivo ejrecicio4.js", () => {

    test("La funcion devuelve la persona con mayor edad", () => {
        
        let data = mayorPersona(
            [
                {nombre: 'Jhon', edad: 16}, 
                {nombre: 'Carlos', edad: 22}, 
                {nombre: 'Ricardo', edad: 23}, 
                {nombre: 'Camilo', edad: 18}
            ]
        );

        expect(data).toBe(`La persona mayor es Ricardo con 23 años.`);
    })

    test("La funcion devuelve si en la lista hay datos", () => {
        
        let data = mayorPersona([]);

        expect(data).toBe(`No se encontró ninguna persona en la lista.`);
    })
})