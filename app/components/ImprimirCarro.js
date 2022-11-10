export let imprimeProductosAgregado = (arrayProducto) => {
  

    let totalF  = arrayProducto.reduce( (acc,el) => acc + Number(el.precio)* Number(el.cantidad), 0 )
  //   this.total =totalF

  localStorage.setItem("total",totalF)
  
  let local=localStorage.getItem("total")
  document.querySelector(".total22").innerHTML =` <h2>Precio Final $${local}</h2>`
  
  
  //   GuardaTocal()
 



  let datos = ""
  document.querySelector(".carroDato").innerHTML = ""
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
    <div class="col-tex">
    <h2>
      Precio por unidad: :
      <h3>${untf.precio}</h>

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

  document.querySelector(".carroDato").innerHTML = datos
  return datos

}