console.log('                            6 task');

function filterNumbers(arr, maxNumber) {
	let newArr = arr.filter( function (i) {
		return i < maxNumber;
	});
console.log(newArr)
};

filterNumbers([1, 4, 8, 1, 20], 5); // [1, 4, 1]