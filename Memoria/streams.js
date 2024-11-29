const fs = require('fs')

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('utf-8');//habilitando la opción de texto internacionalmente aceptado

readableStream.on('data', function(chunk){
    data += chunk;
    readableStream.on('end', function(){
        console.log(data);
    })
    
})