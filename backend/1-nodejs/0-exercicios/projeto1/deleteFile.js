const fs = require('node:fs')

function deleteFile() {
    return new Promise((resolve, reject) => {
        fs.unlink('meuarquivo.txt', (error) => {
            if (error) {
                reject(`Erro ao excluir o arquivo ${error.message}`)
            } else {
                resolve()
            }
        })
    })
}

module.exports = deleteFile