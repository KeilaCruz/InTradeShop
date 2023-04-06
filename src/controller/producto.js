//conexion a supabase
const conexion = require('../conexion');

async function getProducto(){
   try {
     const { data: productos } = await conexion.from('producto').select('*');
     return productos;
   } catch (error) {
     console.error(error);
   }
}

async function agregarProducto(req,res){
    try {
        await conexion.from('producto').insert([{nomProducto:nombre,precio:precio,imagen:imagen,cantidad:cantidad,categoria:categoria,descripcion:descripcion}]);
    } catch (error) {
        console.error(error);
    }   
}

module.exports = agregarProducto;
module.exports = getProducto;