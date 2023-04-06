//Main del sitio web 
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const path = require('path');
const routerProducto = require('./routes/productos.js');

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));


app.use(routerProducto);

app.listen(port);
console.log(`Servidor en ${port}`);
