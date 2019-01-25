import {
	ipcRenderer,
} from 'electron';

console.log('preLoader called');

ipcRenderer.on('crawling', () => {
	alert('receive message');
});
