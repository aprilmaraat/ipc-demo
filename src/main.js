const electron = require('electron');
const countdown = require('./countdown');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain

const windows = [];
let windowCount = 3;

app.on('ready', _ => {
    while(windowCount > 0){
        let win = new BrowserWindow({
            height: 500,
            weight: 500
        });
        win.loadURL(`file://${__dirname}/countdown.html`);
        win.on('closed', _ => {
            win = null;
        });
        windows.push(win);
        windowCount--;
    }
});

ipc.on('countdown-start', _ => {
    countdown(count => {
        windows.forEach(win => {
            win.webContents.send('countdown', count);
        });
    });
});