import './styles/index.scss';

const test = {
	hey: 1,
	ggg: 88,
}

const test02 = {
	...test,
	ggg: 'ooo',
}

console.log(test);
console.log(test02);
