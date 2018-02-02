const http = require('http');
const port = 3000;
const fs = require('fs');

http.createServer((request, response) => {

	let provinces = fs.readFile('province.json', 'utf8', (err, data) => {
	  
		if (err) return console.error(err);
		return JSON.parse(data);
	});

	console.log(provinces);

	response.end();

}).listen(port)