"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 800,
        height: 600
    });
    var startUrl = process.env.ELCTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file',
        slashes: true
    });
    console.log(startUrl);
    mainWindow.loadURL(startUrl);
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
