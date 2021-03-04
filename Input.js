console.log('Dynamic Input File');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const first = require('./First.js');
var tit = {
	describe: 'First Name',
	demand: true,
	alias: 't'
};
var bod = {
	describe: 'Last Name',
	demand: true,
	alias: 'b'
};

const argv = yargs
	.command('add', 'Add a new name',
	{
		title: tit,
		body: bod
	})
	.command('get', 'Retrieve All Names')
	.command('read', 'Read title of Name', {
		title: tit
	})
	.command('remove', 'Remove title of Name', {
		title: tit
	})
	.help()
	.argv;
console.log(process.argv);
console.log('Yargs:', argv);
var cd = process.argv[2];
console.log('The command entered: ', cd);

if(cd == 'add') {
	var note = first.add(argv.title, argv.body);
	if(note == undefined) console.log('Duplicate Title Not added :)');
	else console.log(`Title added: ${note.title}`)
}

else if(cd == 'get') {
	var allnotes = first.getAll();
	console.log('All Notes length:', allnotes.length);
	allnotes.forEach((note) => {
		console.log('Name: ', note.title, note.body);
	})

}
else if(cd == 'read') {
	var re = first.read(argv.title);
	if(re)
		console.log('Title Found', argv.title);
	else console.log('Title not found :(');

}
else if(cd == 'remove') {
	var rem = first.remove(argv.title, argv.body);
	if(rem) console.log('Title Rmoved', argv.title);
	else console.log('Title not removed');
}
else console.log("Can't recognize it");

var obj1 = {
	name: 'Siddarth',
	age: 21,
	sex: 'Male'
};
var det = JSON.stringify(obj1);
console.log(typeof det);
console.log(det);
