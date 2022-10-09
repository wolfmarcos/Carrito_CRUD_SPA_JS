


 let Forms
    export const Form= ()=>{
  
        // let Form = document.createElement('div')
          
         
        Forms =`<div class="contForm">
        <div class="divUser"></div>
    <h1 class="login">logear</h1>
        <form  class="fL " id="formL" >
            <div class="c  ">
                <h2><label for="lN">email</label></h2> <input id="lN" type="email">
            </div>
            <div class="c ">
                <h2><label for="lC">contraseña</label></h2><input  name="c"  id="lC" type="password">
            </div>
            <input type="submit" value="logeo" name="" id="" class="submit btn--3">
           
        </form>
<div class="contBtn"> 
        <button  id="google" class="btn btn--1">            Google           </button>
    
        
        
        </div>
        <div class="mostrar">
        <form  class="fR carreaux_presentation_light btn btn--4" id="formF" >
            <h5 class="reg ">registro</h5>
            <div class="c deroul_titre">
                <h2><label for="n">email</label></h2> <input id="n" type="email">
            </div>
            <div class="c deroul_soustitre">
                <h2><label for="c">contraseña</label></h2><input  name="c"  id="c" type="password">
                <h2><label for="c">repita contraseña</label></h2><input  name="c"  id="c" type="password">
            </div>
            <input type="submit" value="registro" name="" id="" class="submit   btn--3">
         
            
        </form>
    </div>
    
    </div>
        `;
         

        
        
        
        
          return Forms;
            
           }