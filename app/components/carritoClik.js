import { Producto } from "../assets/classes/producto.js";

import { imprimeProductosAgregado } from "./ImprimirCarro.js";



export let finalizarCompara = () => {
    let verCarrito = document.querySelector(".carroDato2");
    let productoEnStorage = JSON.parse(localStorage.getItem("productoEnStorage")) || [];





    verCarrito.addEventListener("click", (e) => {

        if ("finalizar" == e.target.classList[0]) {


            Swal.fire({
                title: 'Quiere Finalizar La Compra?',
                text: "se agregara Todos sus Productos del carro!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'si, añador al carrito!'
            }).then((result) => {
                if (result.isConfirmed) {

                    Swal.fire(

                        {
                            width: 600,
                            showCloseButton: true,

                            focusConfirm: false,
                            confirmButtonText:
                                '<i class="fa fa-thumbs-up"></i> Volver',
                            confirmButtonAriaLabel: 'Thumbs up, great!',

                            cancelButtonAriaLabel: 'Thumbs down',
                            showCancelButton: true,
                            title: '<strong>Gracias Por su compra</u></strong>',
                            icon: 'info',

                            html: (imprimeProductosAgregado(productoEnStorage) || " "
                            ),



                        })

                    localStorage.clear()
                    imprimeProductosAgregado([])
                    sumaCarro()

                    a = function () {
                        'use strict';
                        var millisecondsBeforeRefresh = 2000;
                        window.setTimeout(function () {
                            location.href = `#/`

                            document.location.reload();
                        }, millisecondsBeforeRefresh);
                    };
                    a()
                }
            })


        }
    })
}


export let ElementoCarrito = () => {

    let productoEnStorage = JSON.parse(localStorage.getItem("productoEnStorage")) || [];

    let verCarrito = document.querySelector(".carroDato");


    let eliminar = (coll, a, b) => {
        Swal.fire({
            title: 'Quiere eliminar al carro?',
            text: "se eliminara este producto al carro!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si, añador al carrito!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado!',
                    'Perfecto, gracias',
                    'success'
                )


                coll(a, b)
                document.location.reload();
            }
        })


    }

    let eliminarse = (idElemento, div) => {
        div.remove()
        productoEnStorage.splice(idElemento, 1)
        localStorage.setItem("productoEnStorage", JSON.stringify(productoEnStorage))

    }
    verCarrito.addEventListener("click", (e) => {

       

        let idSelec = Number(e.target.parentNode.id)
        let index = productoEnStorage.findIndex(({ id }) => id === idSelec)
        

        if ("sumar" == e.target.classList[1]) {
            let aryProd = new Producto(productoEnStorage[index].id, productoEnStorage[index].nombre, productoEnStorage[index].descripcion, productoEnStorage[index].stock, productoEnStorage[index].precio, productoEnStorage[index].cantidad)

            aryProd.sumarCantidad()
            productoEnStorage[index] = { ...aryProd }

            localStorage.setItem("productoEnStorage", JSON.stringify(productoEnStorage))

            imprimeProductosAgregado(productoEnStorage)

        } else if ("restar" == e.target.classList[1]) {
            let aryProd = new Producto(productoEnStorage[index].id, productoEnStorage[index].nombre, productoEnStorage[index].descripcion, productoEnStorage[index].stock, productoEnStorage[index].precio, productoEnStorage[index].cantidad)

            let esTrue = aryProd.restarCantidad()
            esTrue ? console.log("no elimino") : eliminar(eliminarse, index, e.target.parentNode.parentNode)
            productoEnStorage[index] = { ...aryProd }
            localStorage.setItem("productoEnStorage", JSON.stringify(productoEnStorage))
         

            imprimeProductosAgregado(productoEnStorage)
           

        } else if ("eliminar" == e.target.classList[1]) {

            eliminar(eliminarse, index, e.target.parentNode.parentNode)
            aryProd.decontarStock(productoEnStorage.stock)
            productoEnStorage[index] = { ...aryProd }

            localStorage.setItem("productoEnStorage", JSON.stringify(productoEnStorage))
            imprimeProductosAgregado(productoEnStorage)








        } else { console.log(e.target.classList[1], "click"); }
      

    })
}




export let sumaCarro = () => {

    let productoEnStorage = JSON.parse(localStorage.getItem("productoEnStorage")) || [];

    let redu = productoEnStorage.reduce((acc, p) => acc + p.cantidad, 0)
    let verCarritoButon = document.querySelector(".cantidad");

    verCarritoButon.innerHTML = ""
    if (redu > 0) {
        verCarritoButon.innerHTML += `<h1>${redu}</h1>`

    } else {
    }


}



export let carritoClick = () => {
    let productoEnStorage = JSON.parse(localStorage.getItem("productoEnStorage")) || [];
    let verCarritoButon = document.querySelector(".carroItem");
    let verCarrito = document.querySelector(".carroDato2");


    verCarritoButon.addEventListener("click", (e) => {
        if (true == verCarrito.classList.replace("a", "fR")) {
            verCarrito.classList.replace("a", "fR")
        } else verCarrito.classList.replace("fR", "a")
    }

    )





    imprimeProductosAgregado(productoEnStorage)

}


export let carritoBacio = () => {



}