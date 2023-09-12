export const mayores = (num1, num2) => {

    if(num1 > num2) {
        
        let suma = num1 + num2;
        let resta = num1 - num2;
        return `La suma de los numeros es ${suma} y la diferencia es ${resta}`

    } else {

        let multiplicacion = num1 * num2;
        let division = num1 / num2;
        return `El producto de los 2 numeros es ${multiplicacion} y la division entre los 2 da ${division.toFixed(1)}`
        
    }
}