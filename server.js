const http = require('http');
const server = http.createServer((request , response)=>{
     response.writeHead(200 , 'text/plain');
    response.end('Welcome to the Server');
})
console.log('Listenning Port 8080')
server.listen(8080 , '127.0.0.1');