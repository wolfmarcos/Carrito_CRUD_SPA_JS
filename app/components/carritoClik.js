import { Producto } from "../assets/classes/producto.js";
import { imprimeProductosAgregado } from "./ImprimirCarro.js";




export let ElementoCarrito=()=>{

    

    let verCarrito= document.querySelector(".carroDato");

    verCarrito.addEventListener("click", (e) => {
        let produ =new Producto
        console.log(e.target.classList[1],"click")
   
    if ("sumar" == e.target.classList[1]) {
        console.log("sumar");
      
    } else if("restar" == e.target.classList[1]){
console.log("restar");
    } else if("eliminar" == e.target.classList[1]){
        console.log("eliminar");

    }else {console.log(e.target.classList[1],"click");}

    
    

})}




export let sumaCarro=(p)=>{
    
    let productoEnStorage=JSON.parse( localStorage.getItem("productoEnStorage")) || [];

    let redu=productoEnStorage.reduce((acc,p)=>acc+p.cantidad,0)
    console.log("🚀 ~",redu)
    let verCarritoButon= document.querySelector(".cantidad");
   
    verCarritoButon.innerHTML=""
   
    verCarritoButon.innerHTML+=`<h1>${redu}</h1>`
    console.log("🚀 ~ file: carritoClik.js ~ line 7 ~ sumaCarro ~ productoEnStorage.lenth", productoEnStorage.length)

    
}



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