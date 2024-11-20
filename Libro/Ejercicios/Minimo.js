/* Mínimo
El capítulo anterior introdujo la función estándar Math.min que devuelve su
argumento más pequeño. Nosotros podemos construir algo como eso ahora.
Escribe una función min que tome dos argumentos y retorne su mínimo. */


const valMin = (x, y, z)=>{
    let valorMin = Math.min(x, y, z);
    console.log(valorMin);
    
}
valMin(15, 8, 26)