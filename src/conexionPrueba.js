//Conexion de prueba
const getUsuarios = require('./controller/producto.js');

async function showUsuarios(){
    try{
        const usuarios = await getUsuarios();
        console.log(usuarios);
    } catch (error) {
        console.error(error);
    }
}

showUsuarios();