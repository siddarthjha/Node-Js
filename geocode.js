const request = require('request');

var geocodeAdd = (address, callback) => {
	var encodead = encodeURIComponent(address);

request({
	url: 'https://maps.googleapis.com/maps/api/geocode/json?address= ${encodead}',
	json: true
}, (error, response, body) => {
	if (error) {
		callback('Unable to connect to google servers');
	} else if (body.status === 'ZERO_RESULTS') {
		callback('Unable to find the location');
	} else if(body.status === 'OK') {
		callback(undefined, {
			address: body.results[0].formatted_address,
			Lattitude: body.results[0].geometry.location.lat,
			Longitude: body.results[0].geometry.location.lng
		});
	
	} else if(body.status === 'REQUEST_DENIED') {
		callback('Please enable your Google Maps API platform premium service of $300');
	}

});
};


module.exports.geocodeAdd = geocodeAdd;