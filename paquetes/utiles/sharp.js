//Sharp trabaja con la libreria de manejo imagenes en C++
//instalacion npm install sharp

const sharp = require('sharp');
sharp('original.png')
  .resize(80)
  .grayscale()//imagen a blanco y negro
  .toFile('resized.png');//redimensionar la imagen 80px