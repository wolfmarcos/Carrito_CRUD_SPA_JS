
//  import {Descrpcion} from "./Descripcion.js"

export const crearProducto =async(tf)=>{


 
  
    


    console.log("inicia crear : ",tf);
    let sumaP = new DocumentFragment
   


 

    if (tf.length>=0) {
       

        document.querySelector(".content").innerHTML=""
 
        for ( const untf of tf) {
        
        
            console.log("titulossss: ",untf.titulo);
            let div22 = document.createElement('div');
             div22.id = untf.id;
           div22.className = 'contenedor';
         
           div22.innerHTML=`
           <a >
           <div class="tarjeta">
               <div class="imgC">
                   <img class="img"  id="img2"  src=" ${untf.poster}" alt="">
             </div>
    
               <div class="texto">
                  <i class="ico1"  data-feather="search">$ ${untf.precio}   </i>
    
                   <div class="col-tex">
                       <h2>
                           Producto: 
                           <h3>  ${untf.nombre}</h>
                       </h2>
                   </div>
                   <div class="col-tex">
                       <h2>
                       Stock:
                           <h3>${untf.stock}</h>
                       </h2>
    
                   </div>
               </div>
            </div>
       </a>
    
         `;
    
        
       
    div22.addEventListener("click",()=>{
        // Descrpcion(untf)
        // console.log("selecion",untf)
        let strObjet=JSON.stringify(untf)
        console.log(strObjet)
        localStorage.setItem("arrayP1",strObjet)
        location.href=`#/descripcion/${untf.id}`
    });
    
          sumaP.append(div22)
           document.querySelector(".content").append(sumaP)
          }
          
      
    
    }
       
    else{ console.log("lo que entrooooo b")
    alert( " no se encuentra")
//    return (sumaP.innerHTML='<h6 class="titulo "></H6> <h6 class="titulo "> La Buequeda realizada , No se encuentra  </H6><h6 class="titulo "> </H6> <h6 class="titulo "> Gracias Por elegirnos </H6>');
}
       
        }
