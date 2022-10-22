import { Producto } from "./producto.js";




 let productoEnStorage=JSON.parse( localStorage.getItem("productoEnStorage")) || [];
 

export class Carrito {
  
  constructor(sertificaBD ){
   /*  */ // sertificaProducto
    this.total=0;
  //  this.cantidad=0;
   this.sertificaBD=sertificaBD;
   console.log("🚀 ~ file: carrito.js ~ line 16 ~ Carrito ~ constructor ~ sertificaBD", sertificaBD)
}
// entro(){console.log("Entr");}

cantidad(stocks){
  if (isNaN(stocks)) {
    console.log(stock);
    let cantidadP=(  parseInt(unLocal.stock)-parseInt(stocks))
   this.cantidad=cantidadP
   return cantidad }
  
}


// get produget(){
//  let ProductoCarrito2=this.sertificaBD
//  return ProductoCarrito2
// }

// set produset(ProductoCarrito2){
//   this.sertificaBD=ProductoCarrito2
//  }

agrega(){

  let ProductoCarrito=this.sertificaBD  
let index = productoEnStorage.findIndex(({id}) => id === ProductoCarrito.id)
// (({id})=>id==ProductoCarrito.id)

if(index>-1){
  let aryProd=new Producto(productoEnStorage[index].id,productoEnStorage[index].nombre,productoEnStorage[index].descripcion, productoEnStorage[index].stock,productoEnStorage[index].precio,productoEnStorage[index].cantidad)
  console.log("iiiiiiiiiiiiiiii🚀 ~ file: carrito.js ~ line 45 ~ Carrito ~ agrega ~ aryProd", aryProd)


            console.log(aryProd);
            let cantidad=aryProd.sumarCantidad()
           console.log("===================================", cantidad)
           aryProd.decontarStock(ProductoCarrito.stock)
           productoEnStorage[index]={...aryProd}
           console.log("🚀 ~ file: carrito.js ~ line 60 ~ Carrito ~ agrega ~ aryProd", aryProd)

}else{

  let aryProd=new Producto(ProductoCarrito.id,ProductoCarrito.nombre,ProductoCarrito.descripcion, ProductoCarrito.stock,ProductoCarrito.precio,ProductoCarrito.cantidad)
       
  productoEnStorage.push(aryProd)

}
console.log("🚀 ~ file: carrito.4443333333~ index", productoEnStorage)



  localStorage.setItem("productoEnStorage",JSON.stringify(productoEnStorage))

}



 total(){
  console.log("🚀 ~ file: carrito.js ~ line 92 ~ Carrito ~ total ~ productoEnStorage", productoEnStorage)
 
  let totalF  = productoEnStorage.reduce((acc,cada) => {
    return acc+Number(cada.precio)
  })
  console.log("🚀 ~ file: carrito.js ~ line 87 ~ Carrito ~ total ~ totalF", totalF)

  this.total =totalF
  // return total 
 }

GuardaTocal(){

document.querySelector(".total").innerHTML=total()
localStorage.setItem("total",this.total)
}

imprimeProductosAgregado(){
  Swal.fire({
    width: 500,
    showCloseButton: true,

    focusConfirm: false,
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Volver',
    confirmButtonAriaLabel: "Thumbs up, great!",

    cancelButtonAriaLabel: "Thumbs down",
    showCancelButton: true,
    // title: '<strong>Sin Login  y <u> Registro</u></strong>',

    html:(   crearProducto(productoEnStorage)        ),
  });
}

}


// n= cantidad(stocks)

// this.sertificaBD=aryProd
      // return  {...aryProd,cantidad:n}
    
      
    //   let  .push(cantidad)