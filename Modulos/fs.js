const fs = require('fs');
function leer(ruta, cd){
    fs.readFile(ruta, (err, data)=>{
        console.log(data.toString())
    })
}
leer(__dirname + '/archivo.txt')
 
function escribir(ruta, contenido, cb){
  fs.writeFile(ruta, contenido, function(err){
    if(err){
        console.log('No se ha podido escribir');
    }else{
        console.log('Se ha logrado escribir');
        
    }
  })  
}

escribir(__dirname + '/archiv1.txt','Hola soy un nuevo archivo')

function borrar(ruta, cb){
    fs.unlink(ruta, cb)
}
borrar(__dirname + '/archiv1.txt', console.log)