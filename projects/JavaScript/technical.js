// Crear una función que aplane los arreglo en un nivel.
const arr = [[1, 2], [[3, 4, 5], [6, [7], []]]]; //[1, 2,[3, 4, 5], [6, [7], []]]
const flatten = arr => arr.reduce((acc, el) => acc.concat(el));
const a = flatten(arr);
console.log('Flattened arrangement =', a);

// Escriba un programa que encuentre el número mayor de un arreglo
// iterando el arreglo una sola vez.
const numbers = [4, 5, 3, 70, 14, 64, 1];
const getBiggets = arr => arr.reduce((acc, el) => acc > el ? acc : el);
const b = getBiggets(numbers);
console.log('The greater number is =', b);

// Escriba un programa que multiplique dos números sin utilizar el signo
// por (*).
const multiply = (a, b) => {
	let result = 0;
	const positive = Math.abs(b) == b;

	for (i = 0; i < Math.abs(b); i++) {
		result = positive ? result + a : result - a;
	}
	return result;
}
const c = multiply(7, -7);
console.log('Multiplication is =', c);

// Iterando un arreglo solo una vez, escribir una función que elimine los
// [undefined, false, null y 0].
const clean = (arr) => arr.reduce((acc, el) => {
	if (el) {
		acc.push(el);
	}
	return acc;
}, []);
const d = clean([1, undefined, 2, false, null, 0, 3]);
console.log('Cleaning =', d);

// Realice un programa que cuente cuántas veces se repite una palabra.
const repeated = (str) => {
	const lowered = str.toLowerCase();
	const splitted = lowered.split(' ');
	const reduced = splitted.reduce((acc, el) => {
		if (acc[el]) {
			acc[el]++;
		} else {
			acc[el] = 1;
		}
		return acc;
	}, {})
	return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el);
}
const e = repeated('Había una vez un joven muy joven de un pueblo...');
console.log('The repeated =', e);

// verificar si un String es un palindromo
const isPalindrome = (str) => {
	str = str.replace(/\s/g, '');
	const lowered = str.toLowerCase();
	const splitted = lowered.split('');
	const reversed = splitted.reverse();
	const joined = reversed.join('');
	return lowered == joined;
};
const f = isPalindrome('Do geese see God'); // Do geese see God o Rodador
if (f) {
	console.log('Is a palindrome.');
} else {
	console.log('Not a palindrome.');
}
