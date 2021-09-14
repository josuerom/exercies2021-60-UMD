// *** FILTER *** => Crea un nuevo array con los elementos que cumplan con
// la condición.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pares = numeros.filter(num => num % 2 === 0);
console.log("Filter =", pares);

// *** MAP *** => Crea un nuevo arreglo con elementos tras ejecutar la
// función por cada índice.
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const multiply = number.map(num2 => num2 * 2);
console.log("Map =", multiply);

// *** FLAT *** =>  Aplana los arreglo de un arreglo en un solo nivel.
const flatten = [[1, 2], 3, [[]], [4, 5], [6, [7, 8]]];
const array = flatten.flat();
console.log("Flat =", array);


// *** FOREACH *** => Ejecuta una función de llamada para cada elemento que
// se le indiquen.
console.log("ForEach.")
const characters = [
	{name: 'Josué Romero', age: 19},
	{name: 'Andri Pacheco', age: 16},
	{name: 'Mefiuse King', age: 21},
];
characters.forEach(val => console.log(val.name));

// *** FIND *** => Devuelve un valor si la función ejecutada es true
// siendo así NO seguirá buscando.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const toKnow = numbers.find(valeus => valeus > 3);
console.log("Find =", toKnow);

// *** REDUCE *** => Devuelve un único valor tras aplicar la reducción
// debe recibir páramtros como: (acumulador, elementos || índice o array).
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const redius = num.reduce((acc, el) => acc + el);
console.log("Reduce =", redius);

/* --------------------------------------------------------------------- */

const posts = [{
	id: 1,
	title: 'Dios es todo en la vida',
	author: 'Josué Romero',
	tags: ['Java', 'Javascript', 'Kotlin'],
}, {
	id: 2,
	title: 'Creer es poder',
	author: 'Josías Romero',
	tags: ['Python', 'Vue', 'Swift'],
}, {
	id: 3,
	title: 'Como construir edificios sostenibles',
	author: 'José Róber Romero',
	tags: ['Go', 'C#', 'C++'],
}, {
	id: 6,
	title: 'Psicología inversa',
	author: 'Andri Yiseth Pacheco',
	tags: ['Angular', 'CSS', 'HTML'],
	run: 'Administración de empresas',
}]
//const a = posts.find(post => post.title == 'Creer es poder');
//const a = posts.some(post => post.tags.includes('Angular'));
//const a = posts.every(post => post.author == 'José Róber Romero');
//const a = posts.map(post => post.author);
//const a = posts.filter(post => post.tags.includes('Vue'));
//const a = posts.filter(post => post.run !== undefined);
/*const a = posts.reduce((acc, el) => { //método redius
	return [...acc, ...el.tags];
}, [])
console.log(a);*/

console.log('Hello Javascript, how have you been?')
