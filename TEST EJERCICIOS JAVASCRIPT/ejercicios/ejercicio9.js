export const atletaGanador = (atleta) => {

    let record = 15.50
    let dataMarcaAtleta = atleta.map((val) => val.marca)
    let marcaMayor = Math.max(...dataMarcaAtleta)

    let dataAtleta = atleta.find((val) => val.marca === marcaMayor)

    if(atleta.length === 0){
        return "No hay datos"
    } else {
        if(marcaMayor > record) {
           return `${dataAtleta.nombre} usted rompio el record con una marca de ${dataAtleta.marca} metros y gano 500 millones`
        } else {
            return `${dataAtleta.nombre} usted gano las olimpiadas con una marca de ${dataAtleta.marca} metros`
        }
    }
}