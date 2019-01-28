"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var mainWindow;
function createWindow() {
    mainWindow = new electron_1.BrowserWindow({
        width: 1600,
        height: 900,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            webviewTag: true
        }
    });
    var startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file',
        slashes: true
    });
    global.constants = {
        dirName: __dirname
    };
    mainWindow.loadURL(startUrl);
}
electron_1.app.on('ready', createWindow);
electron_1.app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});
