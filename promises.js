function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola ' + nombre);
            resolve(nombre);                       
        }, 1000);
    })
        
}

        
function hablar(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log('Bla. bla, bla, bla');
            resolve();
            /* reject()    */     
        }, 1000);
    })
}

function conversacion(nombre, veces, callback){
    if(veces>0){
        hablar(function(){
            conversacion(nombre, --veces, callback)
        })
    }else{
        adios(nombre, callback)
    }
}

function adios(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);

    })    
}

console.log('Iniciando proceso...')
hola('Brayan')
    .then(hablar)
    .then(hablar)
    .then(nombre =>{
        return adios(nombre)     
    })
    .then(function(){
        console.log('Terminando proceso.');        
    })
    .catch(function(){
        console.log('Ha sucedido un error');
        
    })

// Opción de GPT para usar una promesa también en la funsión de conversar.

/* function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola ' + nombre);
            resolve(nombre);                       
        }, 1000);
    });
}

function hablar() {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Bla. bla, bla, bla');
            resolve();     
        }, 1000);
    });
}

function conversacion(nombre, veces) {
    if (veces > 0) {
        return hablar().then(() => conversacion(nombre, --veces));
    } else {
        return adios(nombre);
    }
}

function adios(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Adios ' + nombre);
            resolve();
        }, 1000);
    });
}

console.log('Iniciando proceso...');
hola('Brayan')
    .then(nombre => conversacion(nombre, 3))
    .then(() => {
        console.log('Terminando proceso.');
    })
    .catch(function(){
        console.log('Ha sucedido un error');
    }); */