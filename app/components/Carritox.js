export let Carritox=( param,bd) => {
  console.log("🚀 ~ file: Carritox.js ~ line 49 ~ Carritox ~ bd", param)
 

    const arrayProductsAgregados =JSON.parse( localStorage.getItem("arrayProductsAgregados")) ||[];
    console.log("🚀 ~ file: Carritox.js ~ line 6 ~ Carritox ~ arrayProductsAgregados........", arrayProductsAgregados.id)


    
    const sertificaBD= bd.find( e => e.id == param)
    console.log("🚀 ~ file: Carritox.js ~ line 11  ~ Carritox ~ sertificaBD",sertificaBD.stock)
    // let carritoTotal2=[]

      if(  arrayProductsAgregados.id!=undefined){  
 console.log("arrayProductsAgregados estrooooooooooooooooooo");
     let carritoTotal2=
     arrayProductsAgregados.map((unLocal)=>{
      // console.log("🚀 ~ file: Carritox.js ~ line 28 ~ carritoTotal2 ~ unLocal", unLocal)

      if (unLocal.id==sertificaBD.id) {
          let  SumaUnProducto=unLocal.cantidad+=1
          return SumaUnProducto
        //   let  SumaUnProducto.push(cantidad)
      }
      else{
        console.log("🚀 ~ file: Carritox.js ~ line 18 ~ carritoTotal2 ~ sertificaBD", sertificaBD)
    
          return sertificaBD
      }
     })
    }else{
      let carritoTotal2= sertificaBD

      console.log(carritoTotal2,"carritoTotal2 Entrooo al elseee",sertificaBD);
      
    }
    
     console.log("🚀 ~ file: Carritox.js ~ line 24 ~ carritoTotal2 ~ carritoTotal2", )

   
     localStorage.setItem("arrayProductsAgregados",JSON.stringify(carritoTotal2))

       
    Swal.fire({
        width: 500,
        showCloseButton: true,
 
        focusConfirm: false,
        confirmButtonText:'<i class="fa fa-thumbs-up"></i> Volver',
        confirmButtonAriaLabel: 'Thumbs up, great!',
       
        cancelButtonAriaLabel: 'Thumbs down',
        showCancelButton: true,
        // title: '<strong>Sin Login  y <u> Registro</u></strong>',
       
        // html:(   crearProducto(carritoTotal2)        ),
        
        
        
        }) 
}















   
        
       

  

   





// if( arrayProductsAgregados.lenth>0){
   

        
        
//     const filter = arrayProductsdb.find( e => e.id == param)
//     const duplicado = arrayProductsAgregados.findIndex(item => item.id === filter.id)
//     console.log(duplicado  );
//     if (duplicado === -1 ) {
//         const newItemCart = new Carrito (filter.id, filter.category,filter.product, filter.price, filter.image, 1)
//         arrayProductsAgregados.push(newItemCart)
//         console.log(arrayProductsAgregados);
//     }else{
//         arrayProductsAgregados[duplicado].cantidad += 1
//     }
//     localStorage.setItem("arrayProductsAgregados",JSON.stringify(arrayProductsAgregados))
    
// }