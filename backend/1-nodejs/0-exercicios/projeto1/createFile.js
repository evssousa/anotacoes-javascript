const fs = require('node:fs')

function createFile(msg) {
    return new Promise((resolve, reject) => {
        fs.writeFile('meuarquivo.txt', msg, 'utf-8', (error) => {
            if (error) {
                reject(`Erro ao criar o arquivo: ${error.message}`)
            } else {
                resolve()
            }
        })

    })
}

module.exports = createFile