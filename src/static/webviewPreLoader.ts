import {
	ipcRenderer,
} from 'electron';

console.log('preLoader called');

ipcRenderer.on('crawling', () => {
	alert('receive message');
	ipcRenderer.sendToHost('response-body', document.getElementsByTagName('body'));
});
