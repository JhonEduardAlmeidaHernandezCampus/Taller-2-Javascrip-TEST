export const promedio = (num1, num2, num3) => {
    const notas = (num1 + num2 + num3) / 3

    return (notas <= 3.9) ? "Estudie más" : "Becado mi papá"
}