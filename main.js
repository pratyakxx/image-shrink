const {app, BrowserWindow , Menu , ipcMain} = require("electron")
const menu = require('./menu')

process.env.NODE_ENV = "development"

const isDev = process.env.NODE_ENV === "development" ? true : false
const isLinux = process.platform === "linux" ? true : false

let mainWindow

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        title:"imageShrink",
        width:isDev ? 800 : 450,
        height:580,
        backgroundColor:"white",
        resizable: isDev,
        webPreferences:{
            nodeIntegration:true,
        },
    })

    isDev ? mainWindow.webContents.openDevTools(): null
    mainWindow.loadFile('./app/index.html')

}


app.on('ready',()=>{
    createMainWindow()
    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)
    app.on('closed',()=>mainWindow=null)
})

ipcMain.on("imgMin", (e,options)=>{
    console.log(options)
})

