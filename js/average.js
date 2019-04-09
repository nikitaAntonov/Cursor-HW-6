console.log('                            8 task');

function average(arr) {
	let sum = 0;
	arr.forEach(item => sum += item);
	const sumLength = sum / (arr.length);
	return sumLength.toFixed(2);
}
console.log(average([1,4,2]));
