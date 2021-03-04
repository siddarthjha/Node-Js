var func = (a, b) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if(typeof a === 'number' && typeof b === 'number') {
				resolve(a * b);
			} else {
				reject('Arguments must be number');
			}
		}, 1500);
	});
};

func(5, 9).then((res) => {
	console.log('Result-1:', res);
	return func(res, 20);
}, (errorMess) => {
	console.log('Error-1:', errorMess);
}).then((res) => {
	console.log('Result-2:', res); // Promise Chaining
}, (errorMess) => {
	console.log('Error-2:', errorMess);
});

/*
var prom = new Promise((resolve, reject) => {
	setTimeout(() => {
	resolve('Hey, It Worked!!');
	reject('Sorry bad luck :(');
	}, 1500); // Either one of both is executed and only once!!
});

prom.then( (message) => {
	console.log('Success:', message);
}, (errorMess) => {
	console.log('Error:', errorMess);
}); */