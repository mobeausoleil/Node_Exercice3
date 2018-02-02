const http = require('http');
const port = 3000;
const fs = require('fs');
let provinces;

fs.readFile('province.json', (err, data) => {
		if (err) return console.error(err);
		provinces = JSON.parse(data);
		return provinces;
});

http.createServer((request, response) => {

	console.log(provinces);
	let html = "<!DOCTYPE html><head><title>Les provinces</title><meta charset='utf-8'></head><body><table>";

	for (let nom in provinces){
		html+= "<tr><td>"+provinces[nom]+"</td></tr>";
	}

	html+="</table></body></html>"

	response.write(html);
	response.end();

}).listen(port)