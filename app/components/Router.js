
import { funcionBuscarP } from "./BuscadorProceso.js";
import { Descrpcion } from "./DescripcionRender.js";

import { crearProducto } from "./TarjetasYProceso.js";
import { ajax } from "../helpers/ajax.js";
import url from "../helpers/urls.js";
import { funcionCategotia } from "./Categoria.js";
import { carritoClick ,ElementoCarrito,sumaCarro,finalizarCompara} from "./carritoClik.js";
console.log("lalalala",localStorage.getItem("arrayP1"))

let arrayP2=JSON.parse(localStorage.getItem("arrayP1")) 


// let m = () =>{
//         //refresh the entire document
//        document.location.reload();
//     }

//     window.onload =m();

export const Router = async () => {
    let objeto = await ajax(url)
    // console.log("Router:",props);
    // console.log("local antes",arrayP1);

     let {hash} = location;
    // console.log("hash ", hash)
    // console.log("link ",  `#/descripcion/${arrayP2.id}`)
    // console.log("id ",  `${arrayP2.id}`)

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
   console.log("🚀 ~ file: Router.js ~ line 30 ~ Router ~ descri", descri)
 
    document.querySelector(".main").appendChild(descri)
 

}else{
    crearProducto(objeto)
}

}