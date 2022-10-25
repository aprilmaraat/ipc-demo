const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

app.on('ready', _ => {
    mainWindow = new BrowserWindow({
        height: 500,
        weight: 500
    });

    mainWindow.loadURL(`file://${__dirname}/countdown.html`);

    mainWindow.on('closed', _ => {
        mainWindow = null;
    });
});