const express = require('express');
const hbs = require('hbs');
const fs = require('fs');


const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials'); // Handle bars Partials dir.
app.set('view engine', 'hbs'); // Line to start handle bars


// Middleware to collect information 
app.use((req, res, next) => {
	var now = new Date().toString();

	
	var log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	fs.appendFile('server.log', log + '\n', (err) => {
		if (err) {
			console.log('Unable to append Server Log');
		}
	});
	next();
});
/*
// This will not execute the further lines as for maintenance pupose
app.use((req, res, next) => {
	res.render('maintenance.hbs', {
		name: 'Siddarth'
	});
});
*/
app.use(express.static(__dirname));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear() // Go to footer.hbs to give it date
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
})

app.get('/', (request, response) => {
	//response.send('<h1>Hello Express!!</h1');
	/*
	response.send({
		name: 'Siddarth',
		hobbies: [
			'Anime',
			'Volleyball'
		]
	}); */
	response.render('home.hbs',{
		name: 'Siddarth',
		pageTitle: 'Home Page'
		//currentYear: new Date().getFullYear()
	});
});

app.get('/about', (req, res) => {
	// res.send('About Page');
	res.render('about.hbs', {
		pageTitle: 'About Page'
	});
})

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Unable to handle request'
	});
});

app.get('/projects', (req, res) => {
	res.render('project.hbs', {
		pageTitle: 'Projects Page',
		name: 'Siddarth Jha'
	});
});

app.listen(port, () => {
	console.log(`Server is up on port ${port} `);
});