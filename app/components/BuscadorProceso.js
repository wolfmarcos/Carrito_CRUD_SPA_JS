 import { crearProducto } from "./TarjetasYProceso.js";

export const  funcionBuscarP=(producto)=>{
let buscarP = document.querySelector(".navInput");
console.log("Buscador: ",buscarP.value);
if(buscarP.value==" "){
    console.log("no texto en b");
let tf=producto;
console.log("🚀 ~ file: Buscador.js ~ line 9 ~ funcionBuscarP ~ tf", tf)

  crearProducto(tf) 
  
    }
    else{
   
    buscarP.addEventListener("keyup",(e)=>{

    let indicador=producto.filter((untf)=> untf.nombre.toLowerCase().indexOf(e.target.value.toLowerCase())>-1 )
   
    console.log(e.target.value.length);
    if (e.target.value.length<=0) {
      
      crearProducto(producto)
    }else{
      console.log("texto en Buscar:",indicador );
      crearProducto(indicador)
    }
    
  
    }
    
    
    
    )}}
