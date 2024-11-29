const { resolve } = require("path");

let suma = 0;

console.time('bucle')
for(let i = 0; i < 1000000; i++){
    suma += 1;
}
console.timeEnd('bucle')

//console .time, nos permite identificar cuanto se demora en trabajar el chuck que tengamos dentro de
//time y timeEnd

//FUNCIONES ASINCRONAS
console.time('asincrono')
function asincrona(){
    return new Promise((resolve) =>{
        setTimeout(function(){
            console.log('Termina el proceso asincrono');
            resolve()            
        })
    })
}
asincrona()
    .then(() =>{
        console.timeEnd('asincrono');      
    })