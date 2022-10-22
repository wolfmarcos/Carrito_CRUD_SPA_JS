export const ajax=async ( props) =>{
    let{   urlA,
            urlB,
             urlC, } =props;
    
    let datos= await fetch(urlC )
    console.log("ajax datos");
   
    let ps= await datos.json() 
    console.log("proceso Data");
    // crearPs(ps)

    return ps
}