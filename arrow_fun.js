var sq = a => a*a;
console.log(sq(9));

var per = {
	name: 'Siddarth',
	Hello: () => {
		console.log(arguments);
		console.log("Hello ", this.name);
	},
	hey() {
		console.log('Hello', this.name);
		console.log(arguments);
	}
};
per.Hello();
per.hey();