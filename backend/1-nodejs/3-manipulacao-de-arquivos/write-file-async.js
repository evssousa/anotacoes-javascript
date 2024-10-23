const fs = require('node:fs')

const content = 'Conteúdo do novo arquivo assincrono'

// forma assincrona para criar o arquivo
// forma mais recomendada, pois executa várias tarefas de uma vez só
fs.writeFile('./arquivo.txt', content, 'utf-8', (error) => {
    if (error) {
        console.log(`Erro ao escrever o arquivo: ${error.message}`)
        return
    }
    console.log('Arquivo criado com sucesso!')
})