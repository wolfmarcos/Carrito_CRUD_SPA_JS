export const ajax=async ( props) =>{
    let{   urlA,
            urlB,
             urlC, } =props;
    
    let datos= await fetch(urlC )
   
    let ps= await datos.json() 


    return ps
}