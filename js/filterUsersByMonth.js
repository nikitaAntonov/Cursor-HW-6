console.log('                            10.1 task');

const usersBirth = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-4-11' },
  { name: 'Luce', birthday: '1999-12-22' }
];
function filterUsersByMonth(usersBirth, month) {
	let userMonth = "";
	usersBirth.forEach( item => {
		let birthday = new Date(item.birthday);
		if (birthday.getMonth() + 1 === month) {
			userMonth = item;
		};
	});
	return userMonth;
};
console.log(filterUsersByMonth(usersBirth, 12)); // [{ name: 'Bill', birthday: '1999-1-19' }]

