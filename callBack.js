function hola(nombre, miCallBak) {
    setTimeout(function(){
        console.log('Hola ' + nombre);
        miCallBak(nombre);                       
    }, 1000);
        
}
function adios(nombre, otroCallBack) {
    setTimeout(function(){
        console.log('Adios ' + nombre);
        otroCallBack();
    }, 1000);    
}

console.log('Iniciando proceso...')
hola('Brayan', function(nombre){
    adios(nombre,function(){
        console.log('Terminando Proceso');
        
    })
})