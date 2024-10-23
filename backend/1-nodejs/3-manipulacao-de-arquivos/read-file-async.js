const fs = require('node:fs')

const fileName = 'arquivo.txt'

// verifica se o arquivo existe
const exists = fs.existsSync(fileName)
// se o arquivo existe, irá ler o arquivo
if (exists) {
    fs.readFile(fileName, 'utf-8', (error, data) => {
        if (error) {
            console.log(`Erro ao ler o arquivo: ${error.message}`)
            return
        }
        // console.log(data)
    
        // MANIPULANDO O ARQUIVO
        // criando um array
        const entries = data.split(',')
        console.log(entries)
    
        // imprimindo cada um em uma linha
        entries.forEach((entry) => console.log(entry))
    })
} else {
    console.log('O arquivo não existe!')
}