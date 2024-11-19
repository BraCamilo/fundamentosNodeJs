/* Tablero de ajedrez
Escribe un programa que cree un string que represente una cuadrícula de 8 ×
8, usando caracteres de nueva línea para separar las líneas. En cada posición
de la cuadrícula hay un espacio o un carácter "#". Los caracteres deberían de
formar un tablero de ajedrez.
Pasar este string a console.log debería mostrar algo como esto:
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
Cuando tengas un programa que genere este patrón, define una vinculación
tamaño = 8 y cambia el programa para que funcione con cualquier tamaño,
dando como salida una cuadrícula con el alto y ancho dados. */

let result = ""; // String inicial vacío
let width = 8;  // Ancho de cada línea
let height = 8; // Número de líneas

// Ciclo externo para manejar las líneas
for (let y = 0; y < height; y++) {
  // Ciclo interno para manejar los caracteres en una línea
  for (let x = 0; x < width; x++) {
    // Verificar si la posición es par o impar
    if ((x + y) % 2 === 0) {
      result += " "; // Agregar un espacio si la suma es par
    } else {
      result += "#"; // Agregar un '#' si la suma es impar
    }
  }
  result += "\n"; // Agregar una nueva línea después de completar una línea
}

console.log(result); // Mostrar el resultado en la consola

