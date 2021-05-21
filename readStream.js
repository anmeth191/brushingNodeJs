const fs = require('fs');

// const readStream = fs.createReadStream(`${__dirname}/lorem.txt` , 'utf-8');
// const writeStream = fs.createWriteStream(`${__dirname}/write.txt`);

// readStream.on('data' , (chunk)=>{
//     console.log('new data received')
//     console.log(chunk)

//     writeStream.write(chunk);
// })


//using pipes and send it to th server 

const http = require('http');

// const server =  http.createServer((request , response)=>{
//         response.writeHead(200 , {'Content-Type':'text/plain'})
       
//         const readStream = fs.createReadStream(`${__dirname}/lorem.txt` , 'utf-8');
        
//         readStream.pipe(response)



// })
// console.log('Sever has started')
// server.listen(8080 , '127.0.0.1')

//serve a html page


const server = http.createServer((request , response) =>{
   response.writeHead(200 , {'Content-Type':'text/html'});
   const readIndex = fs.createReadStream(`${__dirname}/index.html` , 'utf-8');
   readIndex.pipe(response);

})
console.log('Server is running......')
server.listen(8080 , '127.0.0.1');
