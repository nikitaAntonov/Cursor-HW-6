console.log('                            7 task');


console.log('вариант 1');

function minMax1(arr1) {
	console.log(('max: ' + Math.max(...arr1) ), 
		('min: ' + Math.min(...arr1) ));
}
minMax1([1, 4, 8, 2, 20]);


console.log('вариант 2');

function minMax2(arr2) {
	const sortNumber = (a, b) => a - b;

	let arrCopy = arr2.sort(sortNumber).map( i => i );
	let newString = {};

	Object.assign(newString, arrCopy);

	console.log(('max: ' + Object.values(newString)[4]),
					('min: ' + Object.values(newString)[0]));

}
minMax2([1, 4, 8, 2, 20]);


console.log('вариант 3');

function minMax3(arr3) {
	let newString = {};

	const sortNumber = (a, b) => a - b;
	const getMin = arr3.sort(sortNumber).map( i => i ).splice(0, 1);
	const getMax = arr3.sort(sortNumber).map( i => i ).splice(4, 1);
	const concatNumber = getMin.concat(getMax);

	Object.assign(newString, concatNumber);

	return newString;
}
console.log(minMax3([1, 4, 8, 2, 20]));
// не нашел простого способа сменить название ключей в объекте, решил так оставить..
// еще не понял как использовать ретурн вместо консоль лог, но обещаю разобраться с этим вопросом в будущем!