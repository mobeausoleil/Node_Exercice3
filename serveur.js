const http = require('http');
http.createServer((request, response) => {

response.writeHead(200, {"Content-Type" : "text/html; charset=UTF-8"})
response.write('<style>h1 {font-family:arial; font-size: 3em;}</style>')
response.end()

}).listen(3000)