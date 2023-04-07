
//clase de routing producto
//const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const getProducto = require('../controller/producto');
const detalleProducto= require('../controller/producto');
const conexion = require('../conexion');
const tabla = 'producto';

require('ejs');

router.get('/',(req,res)=>{
    res.send('Vista inicio negociante');
});

router.get('/misproductos', async (req,res) => {
    const productos = await getProducto();
    res.render('misProductos', { productos });  
});

router.get('/misproductos/nuevoproducto',(req,res)=>{
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

        await conexion.from(tabla).insert([{nomProducto:nombre,precio:precio,imagen:imagen,cantidad:cantidad,categoria:categoria,descripcion:descripcion}]);

    } catch (error) {
        console.error(error);
    }  
    res.redirect('/misproductos');
});

router.get('/misproductos/editar/:idProducto',async(req,res)=>{
    const idProducto = req.params.idProducto;
    try {
        const { data:producto } = await conexion.from(tabla).select().eq('idProducto',idProducto).single();
        res.render('editarProducto',{ informacion : producto });
      } catch (error) {
        console.error(error);
    }    
});

router.post('/misproductos/editar/:idProducto',async(req,res)=>{
    const idProducto = req.params.idProducto;
    try {
        let nombre = req.body.nombre;
        let precio = req.body.precio; 
        let descripcion = req.body.descripcion;
        let cantidad = req.body.cantidad;
        let categoria = req.body.categoria;
        let imagen = req.body.imagen;
        await conexion.from(tabla).update([{nomProducto:nombre,precio:precio,imagen:imagen,cantidad:cantidad,categoria:categoria,descripcion:descripcion}]).eq('idProducto',idProducto);
        res.redirect('/misproductos');
    } catch (error) {
       res.status(500).send('error al actualizar el registro');
    }
});
router.get('/misproductos/eliminar/:idProducto',async(req,res)=>{
    const idProducto = req.params.idProducto;
    try {
        const { data:producto } = await conexion.from(tabla).select().eq('idProducto',idProducto).single();
        res.render('eliminarProducto',{ informacion : producto });
      } catch (error) {
        console.error(error);
    }    
});

router.post('/misproductos/eliminar/:idProducto',async(req,res)=>{
    try {
        const idProducto = req.params.idProducto;
        await conexion.from(tabla).delete().eq('idProducto',idProducto);
        res.redirect('/misproductos');
    } catch (error) {
        res.status(500).send('No se pudo eliminar el registro'); 
    }
});

module.exports = router;