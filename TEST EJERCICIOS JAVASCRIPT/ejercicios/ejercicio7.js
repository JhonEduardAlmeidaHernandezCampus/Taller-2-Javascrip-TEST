export const factura = (nombre, precio, cantidad) => {

    if (!parseInt(precio) || !parseInt(cantidad) || parseInt(nombre)) {
        return {message: "Error, vayase a dormir"}
    } else {
        let total = cantidad * precio

        return {
            nombre: nombre,
            total: total,
            message: `${nombre} la cantidad total a pagar es ${total}`
        }
    }
}