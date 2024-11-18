//--
/* let buffer = Buffer.alloc(1);
console.log(buffer); */

/* let buffer = Buffer.from([1, 2, 3]);
console.log(buffer); */

/* let buffer = Buffer.from('Hola mundo');
/* console.log(buffer);
console.log(buffer.toString());*/

let abc = Buffer.alloc(26)



for( i = 0; i < 26; i++){
    abc[i] = i + 97    
}

console.log(abc.toString());

