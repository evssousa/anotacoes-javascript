const createFile = require('./createFile')
const showFile = require('./showFile')
const uploadFile = require('./uploadFile')
const deleteFile = require('./deleteFile')

async function start() {
    await createFile('Conteúdo inicial do arquivo. \nCriado com o módulo fs do Node.js')
    await showFile()
    await uploadFile('Conteúdo modificado!')
    await showFile()
    await deleteFile()
}

start()