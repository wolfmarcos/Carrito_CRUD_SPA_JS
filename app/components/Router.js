
import { funcionBuscarP } from "./BuscadorProceso.js";
import { Descrpcion } from "./DescripcionRender.js";

import { crearProducto } from "./TarjetasYProceso.js";
import { ajax } from "../helpers/ajax.js";
import url from "../helpers/urls.js";
import { funcionCategotia } from "./Categoria.js";
import { carritoClick ,ElementoCarrito,sumaCarro,finalizarCompara} from "./carritoClik.js";

let arrayP2=JSON.parse(localStorage.getItem("arrayP1")) 



export const Router = async () => {
    let objeto = await ajax(url)
  

     let {hash} = location;
   

    ElementoCarrito()
    carritoClick()
    sumaCarro()
     funcionBuscarP(objeto)
     funcionCategotia(objeto)
     finalizarCompara()
if (hash == "" || hash == "#/") {
   

     crearProducto(objeto)
    


}else if (hash =="" || hash ==`#/descripcion/${arrayP2.id}`){ 



let certificaBD = await ajax(url)

   let descri=  Descrpcion( arrayP2,certificaBD)
 
    document.querySelector(".main").appendChild(descri)
 

}else{
    crearProducto(objeto)
}

}