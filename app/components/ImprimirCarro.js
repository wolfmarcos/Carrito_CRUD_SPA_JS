 export let imprimeProductosAgregado=(arrayProducto)=>{
    // Swal.fire({
    //   width: 500,
    //   showCloseButton: true,
  
    //   focusConfirm: false,
    //   confirmButtonText: '<i class="fa fa-thumbs-up"></i> Volver',
    //   confirmButtonAriaLabel: "Thumbs up, great!",
  
    //   cancelButtonAriaLabel: "Thumbs down",
    //   showCancelButton: true,
    //   // title: '<strong>Sin Login  y <u> Registro</u></strong>',
  
    //   html:(   crearProducto(productoEnStorage)        ),
    // });
    document.querySelector(".carroDato").innerHTML=""
    arrayProducto.forEach(untf => {
        console.log("🚀 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀~ file: ImprimirCarro.js ~ line 17 ~ imprimeProductosAgregado ~ untf", untf)
        
    
  document.querySelector(".carroDato").innerHTML+=
  ` 
  <div class="carritoUnidad">
  <div class="texto">
            
    <div class="col-tex">
      
      <h2>
        Producto:
        <h3> ${untf.nombre}</h>
      </h2>
    </div>
    
    <div class="col-tex">
      <h2>
        cantidad:
        <h3>${untf.cantidad}</h>
  
      </h2>
    </div>
    <div class="carroSepara"></div>
    </div>
    <div class="contenedorBoton">
      <div class="carroButon sumar">+</div>
      <div class="carroButon restar">-</div>
      <div class="carroButon eliminar">x</div>
    </div>
    
  </div>
  </div>
  `
});
  
  
    
  }