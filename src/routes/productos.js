
const express = require('express');
const router = express.Router();
const getProducto = require('../controller/producto');

require('ejs');

router.get('/',(req,res)=>{
    res.send('Vista inicio negociante');
});

router.get('/misProductos', async (req,res) => {
   try {
    const productos = await getProducto();
    res.render('misProductos', { productos });
   } catch(e) {
    console.error(error);
    res.status(500).send('No se pueden mostrar los datos');
   }
});

module.exports = router;