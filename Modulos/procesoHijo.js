const {exec, spawn} = require('child_process');
const { stdout } = require('process');

//Uso de comandos del sistema
/* exec('node consola.js', (err, stdout, sterr)=>{
    if (err){
        console.error(err);
        return false;
    }
    console.log(stdout);
    
}) */

//
/* let proceso = spawn('ls', ['-la']); */
let proceso = spawn('cmd.exe', ['/c','dir']);//Esta opción es para windows

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log(dato.toString());    
})
proceso.on('exit', function(){
    console.log('Esta muerto?');
    console.log(process.killed);    
    console.log('El proceso ha terminado');
    
})

