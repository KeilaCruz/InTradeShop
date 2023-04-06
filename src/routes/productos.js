
//clase de routing producto
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const getProducto = require('../controller/producto');
const conexion = require('../conexion');

require('ejs');

router.get('/',(res)=>{
    res.send('Vista inicio negociante');
});

router.get('/misproductos', async (res) => {
    const productos = await getProducto();
    res.render('misProductos', { productos });  
});

router.get('/misproductos/nuevoproducto',(res)=>{
    res.render('nuevoProducto')
});

router.post('/misproductos',async(req,res)=>{
    try {
        let nombre = req.body.nombre;
        let precio = req.body.precio; 
        let descripcion = req.body.descripcion;
        let cantidad = req.body.cantidad;
        let categoria = req.body.categoria;
        let imagen = req.body.imagen;

        await conexion.from('producto').insert([{nomProducto:nombre,precio:precio,imagen:imagen,cantidad:cantidad,categoria:categoria,descripcion:descripcion}]);

    } catch (error) {
        console.error(error);
    }  
    res.redirect('/misproductos');
});

module.exports = router;