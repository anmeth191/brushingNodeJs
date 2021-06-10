const bodyParser = require('body-parser');
const { response } = require('express');
const urlenCodedParser = bodyParser.urlencoded({extended:false});
module.exports = (app)=>{
    let task = {
        users:[
            {name:'Tina',
             lastName:'Sadowski',
             age:28} , 
             {
               name:'Angel',
               lastName:'Rivera',
               age:30
             }
        ]
    }

    app.get('/' , (request , response) =>{
         response.render('index' , { tasks:task.users});
    })



}