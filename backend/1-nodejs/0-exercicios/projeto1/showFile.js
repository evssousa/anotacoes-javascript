const fs = require('node:fs')

function showFile() {
    return new Promise((resolve, reject) => {
        fs.readFile('meuarquivo.txt', 'utf-8', (error, data) => {
            if (error) {
                reject(`Erro ao ler o arquivo: ${error.message}`)
            } else {
                console.log(data)
                resolve()
            }
        })

    })
}

module.exports = showFile