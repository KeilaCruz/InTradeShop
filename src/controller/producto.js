
const conexion = require('../conexion');

async function getProducto(){
    const { data: productos, error } = await conexion.from('producto').select('*');

    if(error){
        throw error;
    }
    return productos;
}

module.exports = getProducto;