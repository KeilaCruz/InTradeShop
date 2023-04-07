//conexion a supabase
const conexion = require('../conexion');

const tabla = 'producto';

require('ejs');

async function getProducto(){
   try {
     const { data: productos } = await conexion.from(tabla).select('*');
     return productos;
   } catch (error) {
     console.error(error);
   }
}

async function agregarProducto(req,res){
    try {
        //let nombre = req.bo
        await conexion.from(tabla).insert([{nomProducto:nombre,precio:precio,imagen:imagen,cantidad:cantidad,categoria:categoria,descripcion:descripcion}]);
    } catch (error) {
        console.error(error);
    }   
}
async function detalleProducto(idProducto){
  try {
     const {data: producto} = await conexion.from('producto').select().eq('idProducto',idProducto).single();
     return producto;
  } catch (error) {
    console.error(error);
 }
}

module.exports = detalleProducto;
module.exports = agregarProducto;
module.exports = getProducto;