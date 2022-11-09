 import { crearProducto } from "./TarjetasYProceso.js";

export const  funcionBuscarP=(producto)=>{
let buscarP = document.querySelector(".navInput");
if(buscarP.value==" "){
let tf=producto;

  crearProducto(tf) 
  
    }
    else{
   
    buscarP.addEventListener("keyup",(e)=>{

    let indicador=producto.filter((untf)=> untf.nombre.toLowerCase().indexOf(e.target.value.toLowerCase())>-1 )
   
    if (e.target.value.length<=0) {
      
      crearProducto(indicador)
    }else{
      crearProducto(indicador)
    }
    
  
    }
    
   

    
    )}}
