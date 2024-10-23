const fs = require('node:fs')

try {
    // método para criar arquivos de forma sincrona
    // nessa forma ele executa linha por linha, o que não né recomendado caso seja criado um arquivo muito grande
    fs.writeFileSync('./arquivo.txt', 'Olá mundo!', 'utf-8')
    console.log('Arquivo criado com sucesso!')
} catch (error) {
    console.log(`Erro ao escrever o arquivo: ${error.message}`)
}