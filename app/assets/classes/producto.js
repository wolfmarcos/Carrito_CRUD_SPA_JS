export class Producto{
  
    constructor(id, nombre,descripcion, stock, precio,cantidad ){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.stock = stock;
        this.precio = precio;
        // this.iva = 1.21
        // this.precioConIva
       this.cantidad=cantidad||1
    }

    // constructor(id,nombre,precio,cantidad){
    //     this.id = id;
    //     this.nombre = nombre;
    //     this.precio = precio;
        
    //    this.cantidad=1||cantidad
    // }

    // precioConIva(){
    //     let resultado = this.precio * this.iva;
    //     this.precioConIva = resultado
    // }

    decontarStock(stockTotal) {
        console.log(this.stock,"wwww",stockTotal);
        if(stockTotal < this.cantidad){
            alert("no tenemos un stock suficiente de  "+stockTotal+" Productos: "+this.nombre)
        }else{
            this.stock = stockTotal - this.cantidad
            // console.log("🚀 ~ file: producto.js ~ line 32 ~ Producto ~ decontarStock ~ unidades", unidades)
            console.log(this.stock);
            return this.stock
        }
    }

    precioTotalUnidades(unidades){

    }

sumarCantidad(){
    console.log("🚀 ~ file: producto.js ~ line 44 ~ Producto ~ sumarCantidad ~ cantidad", this.cantidad)

    //  return this.cantidad=this.cantidad+1
    let a=(this.cantidad<this.stock) ?this.cantidad++ : alert("sin stock")
    return a
}
restarCantidad(){
  let a=true
     this.cantidad>1 ?this.cantidad-- : a= false;
      
    // precioTotalUnidades(unidades){
    //     let resultado = this.precioConIva * unidades;

    //     return alert("el total de la compra, llevando " + unidades + " es " + resultado)
    // }
return a
}


}