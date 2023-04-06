//Conexion de prueba
//const getUsuarios = require('./controller/producto.js');
//const addProducto = require('./controller/producto.js');
const conexion = require('./conexion');

/*
async function showUsuarios(){
    try{
        const usuarios = await getUsuarios();
        console.log(usuarios);
    } catch (error) {
        console.error(error);
    }
}
*/
async function agregarProducto(){
    try {
        await conexion.from('producto').insert([{nomProducto:'Bolso Chanel',precio:123.45,imagen:'sdsdsd',cantidad:4,categoria:'Bolsos',descripcion:'bolsa de mano de piel'}]);
    } catch (error) {
        console.error(error);
    }   
}

agregarProducto();
//showUsuarios();