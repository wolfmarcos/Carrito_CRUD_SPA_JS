 export let imprimeProductosAgregado=(arrayProducto)=>{
  

    let datos=""
    document.querySelector(".carroDato").innerHTML=""
    arrayProducto.forEach(untf => {
    
    
   datos +=
  ` <div class="carritoUnidad">
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
    <div class="contenedorBoton" id="${untf.id}">
      <div class="carroButon sumar">+</div>
      <div class="carroButon restar">-</div>
      <div class="carroButon eliminar">x</div>
    </div>
    
  </div>
  </div>
  `
});
  
document.querySelector(".carroDato").innerHTML= datos
return datos
    
  }