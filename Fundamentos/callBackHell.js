function hola(nombre, miCallBak) {
    setTimeout(function(){
        console.log('Hola ' + nombre);
        miCallBak(nombre);                       
    }, 1000);
        
}
function hablar(callBackHablar){
    setTimeout(function(){
        console.log('Bla. bla, bla, bla');
        callBackHablar();        
    }, 1000);
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

function adios(nombre, otroCallBack) {
    setTimeout(function(){
        console.log('Adios ' + nombre);
        otroCallBack();
    }, 1000);    
}

console.log('Iniciando proceso...')
hola('Brayan', function(nombre){
    conversacion(nombre, 7, function(){
        console.log('Proceso terminado.');
        
    })
})