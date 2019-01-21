import {
	app,
	BrowserWindow,
} from 'electron';

import * as path from 'path';

import * as url from 'url';

let mainWindow: BrowserWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
	});

	const startUrl = process.env.ELCTRON_START_URL || url.format({
		pathname: path.join(__dirname, '/../build/index.html'),
		protocol: 'file',
		slashes: true,
	});

	mainWindow.loadURL(startUrl);
}

app.on('ready', createWindow);

app.on('activate', () => {
	if(mainWindow === null) {
		createWindow();
	}
});
