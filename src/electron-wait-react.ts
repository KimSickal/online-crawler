import * as net from 'net';

const port = process.env.PORT ? (Number(process.env.PORT) - 100) : 3000;

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({port: port}, () => {
	client.end();
	if(!startedElectron) {
		console.log('starting electron');
		console.log(`URL: ${process.env.ELECTRON_START_URL}`);
		startedElectron = true;
		const exec = require('child_process').exec;
		exec('npm run electron');
	}
});

tryConnection();

client.on('error', () => {
	setTimeout(tryConnection, 1000);
});
