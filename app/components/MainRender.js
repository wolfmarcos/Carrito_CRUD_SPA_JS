export const Main=()=>{

 let ContenedorAbsoluto= document.createElement("main");
 ContenedorAbsoluto.className="descipcion"


 let ContenedorPrimario= document.createElement("div");
 ContenedorPrimario.className="main"

 




 let content= document.createElement("div");
  content.className="content"
//  f=document.querySelector("#idContent")





 
ContenedorPrimario.append(content)
ContenedorAbsoluto.append(ContenedorPrimario)
    return ContenedorAbsoluto
}