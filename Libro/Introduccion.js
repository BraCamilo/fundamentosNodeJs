function factorial(numero) {
    if (numero == 0) {
        return 1;
    } else {
        return factorial(numero - 1) * numero;
    }
}

console.log(factorial(8));
/* Algunas veces, para mostrar el resultado que produce un programa, la salida
esperada se escribe después de el, con dos diagonales y una flecha en frente. "// → 40320" */

console.log("Hola mundo \ncomo estan?");
