const express = require('express');
const app = express();
const mainController = require('./controllers/mainController');
app.set('view engine' , 'ejs');
mainController(app);
app.use(express.static('./public'));
app.listen(8080);
console.log('server running in 8080');