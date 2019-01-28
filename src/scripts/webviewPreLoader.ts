import {
	ipcRenderer,
} from 'electron';

console.log('preLoader ready');

ipcRenderer.on('get-body', () => {
	console.log('message received: body');

	const body = document.body;

	ipcRenderer.sendToHost('response-get-body', body.innerHTML);
});
