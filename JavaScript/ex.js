// Realice un programa que permita multiplicar dos números
// sin utilizar el signo de multiplicación (*)
const multiply = (a, b) => {
	let resultado = 0
	const positivo = Math.abs(b) == b
	for (i = 0; i < Math.abs(b); i++) {
		resultado = positivo ? resultado + a : resultado - a
	}
	return resultado
}

const a = multiply(50, -50)
console.log("Multiply =", a);

const refactor = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const k = refactor([1, 2, 34, 51, 1952, 95, 77, 0])
console.log("Bigger number =", k)

// Obtener el número mayor de un arreglo solo iterando el arreglo una sola vez
const theBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b = theBiggest([50, -1500, 516, 1, 15, 0, 5])
console.log("The biggets =", b);

// Iterando un arreglo solo una vez, escribir una función que elimine los
// [undedined, false, null, 0]
const clean = (arr) => arr.reduce((acc, el) => {
	if (el) {
		acc.push(el)
	}
	return acc
}, [])

const c = clean([1, undefined, null, 0, false, 2])
console.log("Clean =", c);

// Escribir una función que aplane los arreglos solo en un nivel 	
const arr = [[1, 2], [[3, 4]], [1, []]] // debe devolver = [1, 2, [3, 4], 1, []]
const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const d = flatten(arr)
console.log("Aplanado =", d)

// Escribir una función que cuente la cantidad de veces que se repite una palabra
const repeated = str => {
	const lowered = str.toLowerCase()
	const splitted = lowered.split(' ')
	const reduced = splitted.reduce((acc, el) => {
		if (acc[el]) {
			acc[el]++
		} else {
			acc[el] = 1
		}
		return acc
	}, {})
	return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}
const e = repeated('Esto es una palabra repetida una largo de una largo')
console.log("The word:", e)

// verificar si un String es un palindromo
const isPalindrome = (str) => {
	str = str.replace(/\s/g, '')
	const lowered = str.toLowerCase()
	const splitted = lowered.split('')
	const reversed = splitted.reverse()
	const joined = reversed.join('')
	return lowered == joined
}
const f = isPalindrome('Do geese see God') // Do geese see God o Rodador
console.log("¿Is a palimdrome? =", f)
