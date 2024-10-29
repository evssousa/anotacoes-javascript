const fs = require('node:fs')

function uploadFile(newMsg) {
    return new Promise((resolve, reject) => {
        fs.writeFile('meuarquivo.txt', newMsg, 'utf-8', (error) => {
            if (error) {
                reject(`Erro ao modificar o arquivo: ${error.message}`)
            } else {
                resolve()
            }
        })
    })
}

module.exports = uploadFile