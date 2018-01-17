const {app, BrowserWindow} = require('electron');

app.on('ready', ()=> {

	let appWindow = new BrowserWindow();
	appWindow.loadURL('http://localhost:3000/');

});