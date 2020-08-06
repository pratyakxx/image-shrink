const {app, BrowserWindow , Menu } = require("electron")
const menu = require('./menu')

process.env.NODE_ENV = "development"

const isDev = process.env.NODE_ENV === "development" ? true : false
const isLinux = process.platform === "linux" ? true : false

let mainWindow

const createMainWindow = () => {
    mainWindow = new BrowserWindow({
        title:"imageShrink",
        width:500,
        height:500,
        resizable: isDev,
    })
    mainWindow.loadFile('./app/index.html')

}

app.on('ready',()=>{
    createMainWindow()
    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)
    mainWindow.on('closed',()=>mainWindow=null)
})

