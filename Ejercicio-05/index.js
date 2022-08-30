const alturaCM = 171;
const alturaM = 1.71;
const peso = 70.5;
const alturaRedondeadaArriba = Math.ceil(alturaM);
const pesoRedondeadoAbajo = Math.floor(peso);
const maxValor = Number.MAX_VALUE + 1 === Number.MAX_VALUE;

console.log(`
    Altura en cm: ${alturaCM}cm
    Altura en m: ${alturaM}m
    Peso: ${peso}kg
    Altura redondeada hacia arriba: ${alturaRedondeadaArriba}m
    Peso redondeado hacia abajo: ${pesoRedondeadoAbajo}kg
    ¿El valor máximo en JS es igual al valor máximo en JS más 1? ${maxValor}
`);
