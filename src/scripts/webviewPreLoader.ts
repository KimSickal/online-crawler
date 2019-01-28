import {
	ipcRenderer,
} from 'electron';

import {
	RequestIpcKeys,
	ReceiveIpcKeys,
} from '../constants';

console.log('preLoader ready');

ipcRenderer.on(RequestIpcKeys.REQUEST_GET_BODY, () => {
	console.log(`message received: ${RequestIpcKeys.REQUEST_GET_BODY}`);

	const body = document.body;

	ipcRenderer.sendToHost(ReceiveIpcKeys.RECEIVE_GET_BODY, body.innerHTML);
});
