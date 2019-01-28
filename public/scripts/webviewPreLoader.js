"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
console.log('preLoader ready');
electron_1.ipcRenderer.on('get-body', function () {
    console.log('message received: body');
    var body = document.body;
    electron_1.ipcRenderer.sendToHost('response-get-body', body.innerHTML);
});
electron_1.ipcRenderer.on('search-by-query', function (_, arg) {
    console.log("message received: search-by-query / arg: " + arg);
    var elements = [];
    document.querySelectorAll('p').forEach(function (elem) {
        elements.push(elem.outerHTML);
    });
    electron_1.ipcRenderer.sendToHost('response-search-by-query', elements);
});
