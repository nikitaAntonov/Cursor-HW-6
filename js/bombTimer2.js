console.log('                            5 task');

function bombTimer(str, time) {
	let readyBomb = () => {
		console.log(time);

		(time === 1) ? setTimeout( () => 
			console.log(str), 1000) :
			clearTimeout(timerBomb);
		
		while (time > 1 ) {
			return bombTimer(str, time - 1 );
		}
	}
	let timerBomb = setTimeout(readyBomb,1000);
}

bombTimer('Boooom2', 2);