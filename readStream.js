//fs isnrequired when you want to read or write files
const fs = require('fs'); 

// const readStream = fs.createReadStream(`${__dirname}/lorem.txt` , 'utf-8');
// const writeStream = fs.createWriteStream(`${__dirname}/write.txt`);

// readStream.on('data' , (chunk)=>{
//     console.log('new data received')
//     console.log(chunk)

//     writeStream.write(chunk);
// })


//using pipes and send it to th server 
//http is required when you are going to set your server 
const http = require('http');

// const server =  http.createServer((request , response)=>{
//         response.writeHead(200 , {'Content-Type':'text/plain'})
       
//         const readStream = fs.createReadStream(`${__dirname}/lorem.txt` , 'utf-8');
        
//         readStream.pipe(response)



// })
// console.log('Sever has started')
// server.listen(8080 , '127.0.0.1')

//serve a html page

/*
const server = http.createServer((request , response) =>{
   response.writeHead(200 , {'Content-Type':'text/html'});
   const readIndex = fs.createReadStream(`${__dirname}/index.html` , 'utf-8');
   readIndex.pipe(response);

})
console.log('Server is running......')
server.listen(8080 , '127.0.0.1');
*/

//How to serve Json in NodeJs
// const server = http.createServer((request,response)=>{
  
//     response.writeHead(200 , {'Content-Type':'application/json'});
//      const person = {
//          name:'Angel',
//          city:'Boaco',
//          age:29
//      }


//      response.end(JSON.stringify(person));
// })


// server.listen(8080 , '127.0.0.1');

//How to do routing with NodeJs
//create a variable and with http create the server that will take a callback function
/*in the function you need the request and the response from the client and to the client */
const server = http.createServer((request , response )=>{
  //evaulate the url and if it match then render the file you want to show
    if(request.url === '/home' || request.url === '/'){
        response.writeHead(200 , {'Content-Type':'text/html'});//writeHead you specify the status of the response
        //200 is good status and 404 is page not found
        /* then you mus read the file you want to render with fs.createReadStream and the file path*/
        const readIndex = fs.createReadStream(`${__dirname}/index.html`);
        /**then send file you read already and pipe it at the response to show in the browser */
        readIndex.pipe(response);
    }else if(request.url === '/about'){
        response.writeHead(200, {'Content-Type':'text/html'})
        const readAbout = fs.createReadStream(`${__dirname}/about.html`);
        readAbout.pipe(response);
    }else {

        response.writeHead(404 , {'Content-Type':'text/html'});
        const readError = fs.createReadStream(`${__dirname}/notFound.html`);
        readError.pipe(response);
        
    }
})
/*You must set the port listening and the home URL*/
server.listen(8080, '127.0.0.1');
//this is a little message just to let you know the server is running
console.log('server is running....');