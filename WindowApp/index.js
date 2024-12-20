const {app, BrowserWindow} = require('electron');
const { heading } = require('npmlog');

let mainWindow;
function crateWindow(){
    mainWindow = new BrowserWindow({
        with: 800,
        height: 800,
    });

    mainWindow.loadFile('index.html');
}