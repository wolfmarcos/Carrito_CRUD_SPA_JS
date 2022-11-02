 import { Form } from "./FormularioRender.js";


let sa=(e)=>{
 if (e.target.className == "reg"){
   alert.clear
   let a=Form()

  
    Swal.fire({
        width: 400,
        showCloseButton: true,
 
        focusConfirm: false,
        confirmButtonText:
          '<i class="fa fa-thumbs-up"></i> Volver',
        confirmButtonAriaLabel: 'Thumbs up, great!',
       
        cancelButtonAriaLabel: 'Thumbs down',
        showCancelButton: true,
        title: '<strong>Sin Login  y <u> Registro</u></strong>',
        icon: 'info',
        html:(    a||" "
        ),
        
        
        
        }) 
    

}}

export const Nav= ()=>{
  
let nav = document.createElement('div')
  
nav.innerHTML=`
  
<nav class="nav1">
<div class="x"></div>
<lu>
    <ul class="menu_items">
        
            <input class="navInput" type="text" placeholder="  Buscar" >

        <li>
            <a class="reg" >login/registro</a>
        </li>
        <li>
        <select class="format" name="format" id="format">
        <option value="">Categotias</option>
        </select>
        </li>
        <div class="carroItem">

   

   
        
        <div class="cantidad"> </div>

       
        <i class=" a fa fa-shopping-cart carro" aria-hidden="true">
       
        </i>
       
       

        </div>
        <div class="carroDato a">      <div>
        </ul>
</lu>

</nav>
<div class="nav2 ">
<details>

    <summary> </summary>
    <div class="div4">
        <ul class="menu_items">
       

            <li>
                <a href="#">TODOS</a>
            </li>
            <li>
                <a href="#">CATEGORIAS</a>
            </li>
            <li>
                <a class="reg">reggg </a>
            </li>
        </ul>             
    </div>
</details>
<a   href="./descripcion.html?id="><div class="col-tex">
    <h2></h2> </div></a>
</div>`;

nav.addEventListener("click",sa)




  return nav;
    
   }

