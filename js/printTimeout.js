console.log('                            1 task');

let printTimeout = (str, n) => {
	let millisecPerSec = n * 1000;
	let print = () => console.log(str);
	setTimeout(print,millisecPerSec);
}
printTimeout('hello from task 1', 10)

