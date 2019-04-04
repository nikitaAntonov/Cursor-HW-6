console.log('                            10.2 task');

var usersName = [
{ name: 'John', birthday: '1999-6-12' },
{ name: 'Bill', birthday: '2005-5-19' },
{ name: 'Carol', birthday: '2003-10-11' },
{ name: 'Luce', birthday: '2000-11-22' }
];

function getAdultNames(users) {
	let newUserArr = [];
	users.forEach( item => {
		const userCurrentYear = new Date().getFullYear();
		const userBirthday = new Date(item.birthday).getFullYear();
		const userAge = userCurrentYear - userBirthday - 1;
		if ( userAge >= 18 ) {
			newUserArr.push( item.name + ' ' + userAge );
		}
	});
	return newUserArr.join(', ');
}
console.log(getAdultNames(usersName)); // 'John 19, Luce 18'