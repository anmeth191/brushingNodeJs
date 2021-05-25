// const express = require('express');

// const app = express();
// app.set('view engine' , 'ejs');

// app.get('/',(request  , response )=>{

//     response.send(`${__dirname}/index.html`)
// })

// app.get('/about', (request , response )=>{

//     response.send('about.html')
// })

//this method tell you how to send data trought the url
/*

app.get('/user:id',(request, response)=>{

    response.send(`the user id is ${request.params.id}`)

})

app.get('/' , (request , response) =>{

    const user = {
        name:'Angel',
        age:30,
        job:'Developer'
    }

    response.render('index' ,  {newUser : user } );

})

app.listen(8080)*/
/*
const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get('/' , (request , response) =>{

     const data ={
         name:'Tina',
         job:'Human Resources',
         country:'USA'
     }

     const countries = ['USA' , 'Canada' , 'Nicaragua'];
    response.render('index' , { user : data , places: countries});

})
app.listen(8080);*/

const express = require('express');
const app = express();
const user ={
    id:1,
    name:'Angel',
    lastName:'Rivera',
    age:30
}

const countries = ['Nicaragua' , 'Canada', 'USA'];

app.set('view engine' , 'ejs');

app.get('/' , (request , response)=>{
  
    response.render('index' , {data:request.query})

})

 app.get(`/about` , (request , response) =>{
     response.render('about' , { data: user  , places: countries})
 })   


app.listen(8080);
console.log('Server is running......');