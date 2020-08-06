const {app } = require("electron")
const menu = [
    {
    label: "Options",
    submenu:[
            {
                label:"Quit",
                click : ()=> app.quit()
            },
            {
                label:"Toggle",
                role :  'toggledevtools'

            },
        ]
    }
]

module.exports = menu