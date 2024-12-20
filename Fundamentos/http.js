const http = require('http')

/* Crearemos un servidor con tecnologia http, este servidor recibira un requerimiento y una respuesta las
cuales se daran mediante la funcion de ruter */

http.createServer(router).listen(3000);

function router(req, res){
    console.log('nueva peticion');
    console.log(req.url);
    
    switch(req.url){
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 404, no se que quieres')
            res.end();
    }
}
