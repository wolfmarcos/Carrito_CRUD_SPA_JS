import { imprimeProductosAgregado } from "./ImprimirCarro.js";

export let carritoClick=()=>{
    let productoEnStorage=JSON.parse( localStorage.getItem("productoEnStorage")) || [];
   let verCarritoButon= document.querySelector(".carroItem");
   let verCarrito= document.querySelector(".carroDato");

   console.log("🚀 ~ file: carritoClik.js ~ line 6 ~ carritoClick ~ verCarrito", verCarrito)
   
//    if (verCarrito) {
    
//    }
verCarritoButon.addEventListener("click", (e) => {
    console.log(e,"click");
//  e.classList.toggle("fR")
if (true == verCarrito.classList.replace("a", "fR")) {
    verCarrito.classList.replace("a", "fR")
} else verCarrito.classList.replace("fR", "a")
}

   )


   
   
   
   
    imprimeProductosAgregado(productoEnStorage)
}