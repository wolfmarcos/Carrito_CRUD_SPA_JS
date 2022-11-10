import { funcionBuscarP } from "./BuscadorProceso.js";
import { crearProducto } from "./TarjetasYProceso.js";

export let funcionCategotia = (producto) => {

  let categorias = [];
  let categorias2 = [];


  producto.forEach((element) => {
    if (!categorias.includes(element.categoria)) categorias.push(element.categoria);
  });

  let selec0 = document.querySelector(".format")

  categorias.forEach(element => {

    selec0.innerHTML += `<option class="asd" value="${element}">${element}</option>`
  });



  let buscar = document.querySelector(".navInput")



  selec0.addEventListener("click", async (e) => {
    buscar.value = " ";
    categorias2 = await producto.filter(produ => produ.categoria == e.target.value)

  

    if (categorias2.length === 0) {

      crearProducto(producto);

    } else if (buscar.value === " ") {
      // buscar.value.length==0

      crearProducto(categorias2);
    } else {
      funcionBuscarP(categorias2)

    }





  })


}