const fs = require('node:fs')

try {
    // método para ler o arquivo, de forma sincrona
    const data = fs.readFileSync('./arquivo.txt', 'utf-8')
    console.log(data)
} catch (error) {
    console.log(`Erro ao ler o arquivo: ${error.message}`)
}