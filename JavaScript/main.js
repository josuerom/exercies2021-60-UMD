/**
 * @author Josué Romero
 * @see sintaxis para dominar arrays en JavaScript
 * @param 10/Agosto/2021 8:20p.m  COL
*/

// Se crea un Array <String>
let frutas = ["Manzana", "Banana", "Patilla"]
console.log("Tamaño del Arrays =", frutas.length)// 2

// Acceder a un elemento de Array mediante su índice
let primero = frutas[0] // Manzana
let segunda = frutas[1] // Banana
let tercera = frutas[frutas.length - 1] // Patilla

// Se recorrer y se imprime el Array
frutas.forEach(function (elemento, indice, array) {
	console.log(elemento, indice);
})

// Así se añade un elemento al final del Array
let nuevaLongitud = frutas.push('Naranja')
// ["Manzana", "Banana", "Patilla", "Naranja"]
console.log(frutas);

// Se elimina el último elemento agregado
let ultimo = frutas.pop() // Elimina "Naranja" del final
// ["Manzana", "Banana", "Patilla"]
console.log(frutas)

// Se añade un elemento al principio del Arreglo
let nuevoElemento = frutas.unshift('Mango')
// ["Mango" ,"Manzana", "Banana", "Patilla"]
console.log(frutas);

// Encontrar el índice de un elemento del Array
frutas.push('Banana')
// ["Manzana", "Banana", "Fresa"]
let pos = frutas.indexOf('Banana') // (pos) es la posición para abreviar "1"
console.log("El indíce de Banana es:", pos)

// Eliminar un único elemento mediante su posición
let eliminarElemento = frutas.splice(pos, 1)
// ["Mango", "Patilla", "Banana"]
// console.log(frutas)

/*-----------------------------------------------------------------------*/

// Eliminar varios elementos a partir de una posición
let vegetales = ['Repollo', 'Espinaca', 'Pepino', 'Zanahoria']
console.log("Array Vegetales:", vegetales)
// ['Repollo', 'Espinaca', 'Pepino', 'Zanahoria']

let indice = 1, numElementos = 2

let eliminarElementos = vegetales.splice(indice, numElementos)
// ["Espinaca", "Pepino"] ==> Lo que se ha guardado en "eliminarElementos"
console.log(vegetales)
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene el array "vegetales" 

// Copiar un Array
let copiarArray = vegetales.slice();
// ["Repollo", "Zanahoria"]; ==> Elementos copiados del arreglo
