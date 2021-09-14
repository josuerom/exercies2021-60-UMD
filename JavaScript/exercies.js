const flatten = arr => arr.reduce((acc, el) => acc.concat(el));
const a = flatten([[1, 2, 3, [], 4], [[5, 6], [7]]]);// [1, 2, 3, [], 4, [5, 6], [7]]
console.log(a);

const getBiggets = num => num.reduce((acc, el) => acc > el ? acc : el);
const b = getBiggets([51, 21, 48, 654, 354, 106, -3014]);
console.log(b);

const clean = cl => cl.reduce((acc, el) => {
	if (acc[el]) {

	}
})
