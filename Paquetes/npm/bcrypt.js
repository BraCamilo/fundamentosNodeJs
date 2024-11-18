const bcrypt = require('bcrypt');

const password = '1234segira!';


bcrypt.hash(password, 5, function(err, hash){
    console.log(hash);

    bcrypt.compare(password, hash, function(err, res){
        console.log(res);

        if(res){
            console.log('La contraseña es similar');
        }else{
            console.log('La contrañesa no es similar');
            
        }
        
    })
    
})
