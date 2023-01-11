const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      //largura da janela.
      width: 800,
      height: 600,
      //esconde a barra superior de opções.
      titleBarStyle: 'hidden',
      //configura os botões do canto superior direito da aplicação.
      titleBarOverlay: {
        color: '#2f3241',
        symbolColor: '#74b1be',
      }
    })
  
    win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })