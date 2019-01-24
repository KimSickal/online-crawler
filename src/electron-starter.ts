import {
	app,
	BrowserWindow,
} from 'electron';

import * as path from 'path';

import * as url from 'url';

interface Global extends NodeJS.Global {
	constants: {[name: string]: any};
}

let mainWindow: BrowserWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true,
			webviewTag: true,
		},
	});

	const startUrl = process.env.ELECTRON_START_URL || url.format({
		pathname: path.join(__dirname, '/../build/index.html'),
		protocol: 'file',
		slashes: true,
	});

	(global as Global).constants = {
		dirName: __dirname,
	};

	mainWindow.loadURL(startUrl);
}

app.on('ready', createWindow);

app.on('activate', () => {
	if(mainWindow === null) {
		createWindow();
	}
});
