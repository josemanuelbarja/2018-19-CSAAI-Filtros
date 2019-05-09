function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc');

  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');

  var deslizador = document.getElementById('deslizador');

  var des_value = document.getElementById('des_value');

  var ctx = canvas.getContext("2d");

  canvas.width = img.width;
  canvas.height = img.height;

  //-- El número total de pixeles es la altura por la anchura
  npixels = canvas.width * canvas.height
  console.log("Anchura (en pixeles): " + canvas.width)
  console.log("Altura (en pixeles): " + canvas.height)
  console.log("Pixeles totales: " + npixels)

  //-- Puesto que cada pixel ocupa 4 bytes, el array de píxeles
  //-- tiene un tamaño de 4 * numero de pixeles
  console.log("Total de datos de la imagen: " + npixels * 4)

  deslizador.oninput = () => {
    des_value.innerHTML = deslizador.value

    //-- Situar la imagen original en el canvas
    ctx.drawImage(img,0,0,600,400);


    //-- Obtener la imagen del canvas en pixeles
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    //-- Obtener el array con todos los píxeles
    var data = imgData.data;

    //-- Obtener el numero total de elementos en el array
    console.log("Tamaño de data: " + data.length)

    umbral = deslizador.value

    console.log(deslizador.value);

     //-- Filtrar la imagen según el nuevo umbral
     for (var i = 0; i < data.length; i+=4) {
       if (data[i] > umbral)
         data[i + 2] = umbral;
     }

    ctx.putImageData(imgData, 0, 0);
  }
}
