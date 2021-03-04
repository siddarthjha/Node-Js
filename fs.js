console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const http = require('http');
const first = require('./First.js');
const lodash = require('lodash');

var value = first.addFun(4, 5);
console.log(first.addFun(5, -5));

var user = os.userInfo();
console.log('Sum is ' , value);
console.log('User details', user);

http.createServer((req, res) =>
{
	fs.readFile('Read Me.txt', (err, data) =>
	{
		if(err) throw err;
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('The data of file is... \n'+ data);
		return res.end('Thank you :)');
	});
	//res.writeHead(200, {'Content-Type': 'text/html'});
}).listen(8080);

fs.appendFile('Read Me.txt', `Hello ${user.username}! Sid age is ${first.age}`, (err)=> {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
fs.readFile('Read Me.txt', 'utf8',  (err, data) =>
{
	if(err) throw err;
	console.log(data);
});
// It creates the file if not existed in writing mode
fs.open('FS File.txt', 'w', function (err, file)
{
	if(err) throw err;
	console.log('File Created');
	console.log('Yes this is something...',file);
});

console.log('Lodash Module Check \n', lodash.isString(true));
console.log('Lodash Module another check', lodash.isString('Siddarth Jha'));
console.log('Another check', lodash.uniq([1, 2, 2, 3, 9, 9]));