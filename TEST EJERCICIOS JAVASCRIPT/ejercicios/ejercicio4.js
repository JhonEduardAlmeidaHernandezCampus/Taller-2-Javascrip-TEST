export const mayorPersona =  (persona) => {
    
    let dataEdad = persona.map((val) => val.edad)
    let edadMayor = Math.max(...dataEdad)

    let personaMayor = persona.find((val) => val.edad === edadMayor);

    return (personaMayor) ? `La persona mayor es ${personaMayor.nombre} con ${personaMayor.edad} años.` : 'No se encontró ninguna persona en la lista.'
    
}