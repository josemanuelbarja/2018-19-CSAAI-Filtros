function main() {
  console.log("En main()....")

  //-- Acceso al objeto con la imagen
  var img = document.getElementById('imagesrc');

  //-- Acceso al objeto con el canvas
  var canvas = document.getElementById('display');

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original

  canvas.width = img.width;
  canvas.height = img.height;

  //-- Obtener el contexto del canvas para
  //-- trabajar con el
  var ctx = canvas.getContext("2d");

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img,0,0,canvas.width,canvas.height);

  //-- Obtener la imagen del canvas en pixeles
  var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  var data = imgData.data;

  //-- Obtener el numero total de elementos en el array
  console.log("Tamaño de data: " + data.length)

  //-- El número total de pixeles es la altura por la anchura
  npixels = canvas.width * canvas.height
  console.log("Anchura (en pixeles): " + canvas.width)
  console.log("Altura (en pixeles): " + canvas.height)
  console.log("Pixeles totales: " + npixels)

  //-- Puesto que cada pixel ocupa 4 bytes, el array de píxeles
  //-- tiene un tamaño de 4 * numero de pixeles
  console.log("Total de datos de la imagen: " + npixels * 4)

  var i = 200 + 50*canvas.width;

  for (var i = 0; i < data.length; i+=4) {
    data[i] = 0; //-- Canal rojo a 0
  }
  ctx.putImageData(imgData, 0, 0);
}
