import { Producto } from "../assets/classes/producto.js";

import { imprimeProductosAgregado } from "./ImprimirCarro.js";



export let finalizarCompara=()=>{
    let verCarrito= document.querySelector(".carroDato2");
    let productoEnStorage=JSON.parse( localStorage.getItem("productoEnStorage")) || [];

    verCarrito.addEventListener("click", (e) => {
        console.log("🚀 ~ file: carritoClik.js ~ line 11 ~ verCarrito.addEventListener ~ e.target.classList[0]", e.target)


        if ("finalizar" == e.target.classList[0]) {

             
    Swal.fire({
        title: 'Quiere Finalizar La Compra?',
        text: "se agregara Todos sus Productos del carro!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'si, añador al carrito!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
        
         
          // Carritox(untf.id)
          // location.href="#/carrito"

      

    //    !
   {
        width: 600,
        showCloseButton: true,
 
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Volver',
        confirmButtonAriaLabel: 'Thumbs up, great!',
       
        cancelButtonAriaLabel: 'Thumbs down',
        showCancelButton: true,
        title: '<strong>Gracias Por su compra</u></strong>',
        icon: 'info',
        html:(    imprimeProductosAgregado(productoEnStorage)||" "
        ),
        
        
        
        }  )

        localStorage.clear()
        imprimeProductosAgregado([])
        sumaCarro()
        }
      })
         
     
        }
    })
}
export let ElementoCarrito=()=>{

    let productoEnStorage=JSON.parse( localStorage.getItem("productoEnStorage")) || [];

    let verCarrito= document.querySelector(".carroDato");

    verCarrito.addEventListener("click", (e) => {

        // console.log("🚀 ~ file: carritoClik.js ~ line 16 ~ verCarrito.addEventListener ~ productoEnStorage", productoEnStorage)

let idSelec= Number(e.target.parentNode.id)
        console.log("🚀 ~ file: carritoClik.js ~ line 78 ~ verCarrito.addEventListener ~ idSelec", idSelec)
        let index = productoEnStorage.findIndex(({id}) => id === idSelec)
        console.log(e.target.classList[1],"click")

    if ("sumar" == e.target.classList[1]) {
        console.log("sumar");
        let aryProd=new Producto(productoEnStorage[index].id,productoEnStorage[index].nombre,productoEnStorage[index].descripcion, productoEnStorage[index].stock,productoEnStorage[index].precio,productoEnStorage[index].cantidad)

            console.log(aryProd);
            let cantidad=aryProd.sumarCantidad()
           console.log("===================================", cantidad)
        //    aryProd.decontarStock(productoEnStorage.stock)
           productoEnStorage[index]={...aryProd}
           console.log("🚀 ~ file: carrito.js ~ line 60 ~ Carrito ~ agrega ~ aryProd", aryProd)

           localStorage.setItem("productoEnStorage",JSON.stringify(productoEnStorage))

           imprimeProductosAgregado(productoEnStorage)
      
    } else if("restar" == e.target.classList[1]){
console.log("restar");
let aryProd=new Producto(productoEnStorage[index].id,productoEnStorage[index].nombre,productoEnStorage[index].descripcion, productoEnStorage[index].stock,productoEnStorage[index].precio,productoEnStorage[index].cantidad)

console.log(aryProd);
let cantidad=aryProd.restarCantidad()
console.log("===================================", cantidad)
// aryProd.decontarStock(productoEnStorage.stock)
productoEnStorage[index]={...aryProd}
console.log("🚀 ~ file: carrito.js ~ line 60 ~ Carrito ~ agrega ~ aryProd", aryProd)

localStorage.setItem("productoEnStorage",JSON.stringify(productoEnStorage))

imprimeProductosAgregado(productoEnStorage)




    } else if("eliminar" == e.target.classList[1]){

        console.log("eliminar");


        console.log("restar");
        let aryProd=new Producto(productoEnStorage[index].id,productoEnStorage[index].nombre,productoEnStorage[index].descripcion, productoEnStorage[index].stock,productoEnStorage[index].precio,productoEnStorage[index].cantidad)
        
        console.log(aryProd);
        let cantidad=aryProd.eliminar()
        console.log("===================================", cantidad)
        aryProd.decontarStock(productoEnStorage.stock)
        productoEnStorage[index]={...aryProd}
        console.log("🚀 ~ file: carrito.js ~ line 60 ~ Carrito ~ agrega ~ aryProd", aryProd)
        
        localStorage.setItem("productoEnStorage",JSON.stringify(productoEnStorage))
        
        imprimeProductosAgregado(productoEnStorage)
        
        
        
        




    }else {console.log(e.target.classList[1],"click");}

    
    

})}




export let sumaCarro=()=>{
    
    let productoEnStorage=JSON.parse( localStorage.getItem("productoEnStorage")) || [];

    let redu=productoEnStorage.reduce((acc,p)=>acc+p.cantidad,0)
    console.log("🚀 ~",redu)
    let verCarritoButon= document.querySelector(".cantidad");
   
    verCarritoButon.innerHTML=""
    if (redu>0) {
        verCarritoButon.innerHTML+=`<h1>${redu}</h1>`
        console.log("🚀 ~ file: carritoClik.js ~ line 7 ~ sumaCarro ~ productoEnStorage.lenth", productoEnStorage.length)
        
    }else{
        // document.querySelector(".finalizar").
    }

    
}



export let carritoClick=()=>{
    let productoEnStorage=JSON.parse( localStorage.getItem("productoEnStorage")) || [];
   let verCarritoButon= document.querySelector(".carroItem");
   let verCarrito= document.querySelector(".carroDato2");

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


export let carritoBacio=()=>{


    
}