const geocode = require('./geocode');
const yargs = require('yargs');


console.log('Asynchronous File');

const argv = yargs
	.options( {
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch waether for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAdd(argv.address, (errorMessage, results) => {
	if(errorMessage) {
		console.log(errorMessage);
	} else { 
		console.log(JSON.stringify(results, undefined, 2));
	}
});

setTimeout(() => {
	console.log('Inside of Callback');
}, 1000);



var user = (id, callback) => {
	var get = {
		id: id,
		name: 'Siddarth'
	};
	setTimeout(() => {
		callback(get);
	}, 3000);
};

user(40, (get) => {
	console.log(get);
})
console.log('Thank you :)');