console.log('                            9 task');

function concatFirstNestedArrays(arr) {
	let arrNew = arr.reduce((a, b) => a.concat(b)).sort((a, b) => a - b).map(i => i);

	return arrNew;
}

console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]));
