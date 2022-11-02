
import { funcionBuscarP } from "./BuscadorProceso.js";
import { Descrpcion } from "./DescripcionRender.js";

import { crearProducto } from "./TarjetasYProceso.js";
import { ajax } from "../helpers/ajax.js";
import url from "../helpers/urls.js";
import { funcionCategotia } from "./Categoria.js";
import { carritoClick ,sumaCarro} from "./carritoClik.js";
let arrayP2=JSON.parse(localStorage.getItem("arrayP1")) 
funcionCategotia

export const Router = async () => {
    let objeto = await ajax(url)
    // console.log("Router:",props);
    // console.log("local antes",arrayP1);

    let {hash} = location;
if (hash == "" || hash == "#/") {
    
    carritoClick()
    sumaCarro()
     funcionBuscarP(objeto)
     funcionCategotia(objeto)
     crearProducto(objeto)
   
}else if (hash ==`#/descripcion/${arrayP2.id}`){
//   let main= document.querySelector(".main")
//    main.innerHTML=""

carritoClick()
sumaCarro()
funcionBuscarP(objeto)
funcionCategotia(objeto)
let sertificaBD = await ajax(url)
// sertifiCarrutoBD(arrayP2.id,sertificaBD)
   let descri=  Descrpcion( arrayP2,sertificaBD)
   console.log("🚀 ~ file: Router.js ~ line 30 ~ Router ~ descri", descri)
 
    document.querySelector(".main").appendChild(descri)
 // localStorage.clear

}


// else if (hash ==`#/carrito`){
//     //   let main= document.querySelector(".main")
//     //    main.innerHTML=""
//     let sertificaBD = await ajax(url)
//      sertifiCarrutoBD(arrayP2.id,sertificaBD)
       
     
//         // document.querySelector(".main").appendChild(carro)
//      // localStorage.clear
    
//     }
// console.log(hash);

}