const { app, BrowserWindow } = require('electron');

let ventanaPrincipal;
app.on('ready', createVentana);
function createVentana() {
  ventanaPrincipal = new BrowserWindow({
    width: 800,
    height: 600,
  });
  ventanaPrincipal.loadFile('index.html');
}