import { Carrito } from "../assets/classes/carrito.js";






export let sertifiCarrutoBD = (param, bd) => {




  let certificaBD = bd.find((e) => e.id == param);

  console.log("🚀 ~ file: newCarritotox.js ~ line 16666 ~ sertifiCarrutoBD ~ certificaBD", typeof certificaBD)

  if (certificaBD == undefined || certificaBD == null) {

  } else {

    let newCarrito = new Carrito(certificaBD);

    newCarrito.agrega();
    newCarrito.totalP()
  }



};
