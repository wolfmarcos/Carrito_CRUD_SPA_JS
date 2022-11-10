import { imprimeProductosAgregado } from "../../components/ImprimirCarro.js";
import { Producto } from "./producto.js";




 let productoEnStorage=JSON.parse( localStorage.getItem("productoEnStorage")) || [];
 localStorage.setItem("productoEnStorage",JSON.stringify(productoEnStorage))|| [];

export class Carrito {
  
  constructor(sertificaBD ){

    this.total=0;
   this.sertificaBD=sertificaBD;
}

cantidad(stocks){
  if (isNaN(stocks)) {
    console.log(stock);
    let cantidadP=(  parseInt(unLocal.stock)-parseInt(stocks))
   this.cantidad=cantidadP
   return cantidad }
  
}



agrega(){
  // totalP()
  let ProductoCarrito=this.sertificaBD  
let index = productoEnStorage.findIndex(({id}) => id === ProductoCarrito.id)


if(index>-1){
  let aryProd=new Producto(productoEnStorage[index].id,productoEnStorage[index].nombre,productoEnStorage[index].descripcion, productoEnStorage[index].stock,productoEnStorage[index].precio,productoEnStorage[index].cantidad)


            console.log(aryProd);
            // let cantidad=
            aryProd.sumarCantidad()
           aryProd.decontarStock(ProductoCarrito.stock)
           productoEnStorage[index]={...aryProd}

}else{

  let aryProd=new Producto(ProductoCarrito.id,ProductoCarrito.nombre,ProductoCarrito.descripcion, ProductoCarrito.stock,ProductoCarrito.precio,ProductoCarrito.cantidad)
       
  productoEnStorage.push(aryProd)

}



  localStorage.setItem("productoEnStorage",JSON.stringify(productoEnStorage))
  
   imprimeProductosAgregado(productoEnStorage)
  document.location.reload();
  

}




// GuardaTocal(){
//   document.querySelector(".total").innerHTML = "-----------------------this.total"


// localStorage.setItem("total",this.total)
// }



}


// n= cantidad(stocks)

// this.sertificaBD=aryProd
      // return  {...aryProd,cantidad:n}
    
      
    //   let  .push(cantidad)