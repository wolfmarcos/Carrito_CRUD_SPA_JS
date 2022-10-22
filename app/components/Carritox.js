import { Carrito } from "../assets/classes/carrito.js";

 




export let sertifiCarrutoBD = (param, bd) => {




let sertificaBD = bd.find((e) => e.id == param);
// let a={}
// let sssssssssb="sertificaBD"
// a={...{sssssssssb} , ...{sertificaBD}}

// a.push(sssssssssb)
console.log("🚀 ~ file: newCarritotox.js ~ line 16666 ~ sertifiCarrutoBD ~ sertificaBD", typeof sertificaBD)

  if (sertificaBD==undefined || sertificaBD==null) {
    console.log(sertificaBD);
  }else{
    // console.log("🚀 ~ file: newCarritotox.js ~ line 1777777777 ~ sertifiCarrutoBD ~ sertificaBD", sertificaBD)
    
    let newCarrito=new Carrito(sertificaBD);

    // newCarrito.entro()
    newCarrito.agrega();
    // newCarrito.total();
    // newCarrito.imprimeProductosAgregado();
  }
 
 
  
};
// let arrayProductsAgregados =JSON.parse( localStorage.getItem("arrayProductsAgregados")) || [];
// console.log(arrayProductsAgregados.length,"LOOOOOOOOOOOOOOOOOOOOOOOOCal",arrayProductsAgregados);

// if( arrayProductsAgregados.lenth>0){

//     const filter = arrayProductsdb.find( e => e.id == param)
//     const duplicado = arrayProductsAgregados.findIndex(item => item.id === filter.id)
//     console.log(duplicado  );
//     if (duplicado === -1 ) {
//         const newItemCart = new newCarritoto (filter.id, filter.category,filter.product, filter.price, filter.image, 1)
//         arrayProductsAgregados.push(newItemCart)
//         console.log(arrayProductsAgregados);
//     }else{
//         arrayProductsAgregados[duplicado].cantidad += 1
//     }
//     localStorage.setItem("arrayProductsAgregados",JSON.stringify(arrayProductsAgregados))

// }
