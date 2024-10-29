async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola ' + nombre);
            resolve(nombre);                       
        }, 1000);
    })
        
}

        
async function hablar(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Bla. bla, bla, bla');
            resolve();
            /* reject()    */     
        }, 1000);
    })
}

async function conversacion(nombre, veces, callback){
    if(veces>0){
        hablar(function(){
            conversacion(nombre, --veces, callback)
        })
    }else{
        adios(nombre, callback)
    }
}

async function adios(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);

    })    
}

async function main() {
    let nombre = await hola('Brayan');
    await hablar();  
    await hablar();
    await adios(nombre);
    console.log('Proceso Terminado');
    
}

main();