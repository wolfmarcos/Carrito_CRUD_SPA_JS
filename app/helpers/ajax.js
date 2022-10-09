export const ajax=async ( props) =>{
    let{   urlA,
            urlB,
             urlC, } =props;
    
    let datos= await fetch(urlC )
    console.log("preparado Conecion A", datos);
   
    let ps= await datos.json() 
    console.log("ps Data", ps);
    // crearPs(ps)

    return ps
}