export const Descrpcion= (untf) => {
  console.log("🚀 ~ file: DescripcionRender.js ~ line 102 ~ Descrpcion ~ untf", untf)

   
 
    
let des= document.createElement('div');


let sa=(e)=>{
    if (e.target.className == "btn11"){
    
    //   let a=Form()
   
     
   
    Swal.fire({
      title: 'Quiere añadir al carro?',
      text: "se agregara este producto al carro!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'si, añador al carrito!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Añadido!',
          'Perfecto, gracias',
          'success'
        )
        añadirAlCarrito(untf)
      }
    })
       
   
   }}



   des.innerHTML=`
<div class="tarjeta2">

           
<a class="icov" href="index.html">

    <span class=" material-symbols-outlined">
        reply
        </span> 
</a>



<H2 class="cate"> Informacion de Contenido</H2>

<div id="pintar" class="content2">

 
    </div>
    <h6 class="titulo "> ${untf.nombre}  </H6>

 


<div id="pintar" class="content2">

<div class="tarjeta">


<div class="imgC">

<img class="img"   src=" ${untf.poster}" alt="">
</div>


</div >



<div  class="col-tex2">
  

        <h2>categoria:</h2>
        <h3> ${untf.categoria}</h3>
        <h2>Stock:</h2>
        <h3> ${untf.stock}</h3>
        <h2>precio:</h2>
        <h3> ${untf.precio}</h3>
        <h2>ICARRITO:</h2>
        <button class="btn11"> Añador Al carro</button>
                
     
    
</div>
</div>
</div>             `


des.addEventListener("click",sa)

 
   return des;
   }
   
  
 
 

    