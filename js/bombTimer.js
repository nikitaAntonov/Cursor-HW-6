console.log('                            3 task');

function bombTimer(str, time) {
	let readyBomb = () => {
		console.log(time--)

		if (time === 0) {
			setTimeout( () => console.log(str), 1000);
			clearInterval(timerBomb);
		}

	}
	let timerBomb = setInterval(readyBomb,1000);
}
bombTimer('Boooom', 3);