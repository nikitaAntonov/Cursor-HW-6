console.log('                            2 task');

function sumAll(n) {
	if (n == 1) return 1;
	return n + sumAll(n - 1);
};
console.log(sumAll(2));
console.log(sumAll(4));