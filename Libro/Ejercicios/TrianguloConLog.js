/* Escriba un ciclo que haga siete llamadas a console.log para generar el siguiente
triángulo:
#
##
###
####
#####
######
####### */
/* let abc = "abc";
console.log(abc.length);
// → 3 */

let string = "";


/* while(string.length < 7){
    string = string + '#';
    console.log(string)
} */

for (let i = 0; i < 7; i++){
    string += '#';
    console.log(string);
    
}