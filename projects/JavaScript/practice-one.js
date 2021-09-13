const multiply = (x, y) => {
	let result = 0;
	const positive = Math.abs(y) == y;

	for (i = 0; i < Math.abs(y); i++) {
		result = positive ? result + x : result - x;
	}
	return result;
}
const a = multiply(7, -7);
console.log(a);

const flatten = arr => arr.reduce((acc, el) => acc.concat(el));
const b = flatten([[1, 2, 3], 4, [[], 6]]);
//[1, 2, 3, 4, 5, [], 6]
console.log(b);

const getBiggets = arr => arr.reduce((acc, el) => acc > el ? acc : el);
const c = getBiggets([1, 231, 54, 1025, 64, 974, -2541, 548, 2]);
console.log(c);

const clean = arr => arr.reduce((acc, el) => {
	if (el) {
		acc.push(el);
	}
	return acc;
}, [])
const d = clean([1, undefined, false, 2, null, 0]);
console.log(d);

const repeated = str => {
	const lowered = str.toLowerCase();
	const splitted = lowered.split(' ');
	const reduced = splitted.reduce((acc, el) => {
		if (acc[el]) {
			acc[el]++;
		} else {
			acc[el] = 1;
		}
		return acc;
	}, {});
	return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el);
}
const e = repeated('Eres quien eres donde eres');
console.log(e);

const isPalindrome = str => {
	str = str.replace(/\s/g, '');
	const lowered = str.toLowerCase();
	const splitted = lowered.split('');
	const reversed = splitted.reverse();
	const joined = reversed.join('');
	return lowered == joined;
}
const f = isPalindrome('Arenera');
console.log(f);
