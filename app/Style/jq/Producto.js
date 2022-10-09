 class Producto{


constructor (id,descipcion,stock,precio,iva){
    this.id=id
    this.descipcion=descipcion
    this.stock= stock
    this.precio=precio
    this.iva=iva
 

}






 precioConIva (){
    total=(iva*100)/precio

}
 descontarDelStock (){
    if(cantidad!=0){
        
        resto=cantidad-1
    }

}

 PrecioTotalUnudades (){


}



}


id++
descipcion=parseInt(prompt(""))
stock=parseInt(prompt(""))
precio=parseInt(prompt(""))
iva=parseInt(prompt(""))

p1=new Producto(id,descipcion,stock,precio,iva)