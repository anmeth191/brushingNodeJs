const tasks = [{task:'feed the dog'} , {task:'Learn how to code'} , {task:'take care of chicken'}]
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = (app)=>{

   app.get('/' , (request ,response) =>{
        
        response.render('index' , {data:tasks});
   })


   app.post('/', urlencodedParser , (request , response) =>{
      console.log(request.body)
      response.render('index' , {data:[...tasks , request.body]})
   })

};