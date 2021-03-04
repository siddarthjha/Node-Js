const fs = require('fs');

var per = {
	name: 'Siddarth',
	age: 21,
	sex: 'Male'
};

var str = JSON.stringify(per);
console.log(typeof str);
console.log(str);
fs.writeFileSync('Name.json', str);
var d = fs.readFileSync('Name.json');

var f = JSON.parse(d);
console.log(typeof f);
