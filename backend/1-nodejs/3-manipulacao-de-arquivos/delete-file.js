const fs = require('node:fs')

// método para deletar o arquivo
fs.unlink('arquivo.csv', (error) => {
    if (error) {
        console.log(`Erro ao excluir o arquivo: ${error.message}`)
        return
    }

    console.log('Arquivo excluído com sucesso!')
})