"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
console.log('preLoader called');
electron_1.ipcRenderer.on('crawling', function () {
    alert('receive message');
    electron_1.ipcRenderer.sendToHost('response-body', document.getElementsByTagName('body'));
});
