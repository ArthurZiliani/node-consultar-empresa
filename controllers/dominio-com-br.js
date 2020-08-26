/* Requires */

const colors = require('../layouts/colors')
const requestDominioComBr = require('../requests/dominio-com-br')

/* Module */

const Module = () => {
  const methods = {}

  // Methods

  methods.verificarDisponibilidade = (nome) => {
    return new Promise((resolve, reject) => {
      requestDominioComBr().request(nome)
        .then(status => {
          if (status === 0) {
            const mensagem = '# Dominio.com.br: Disponível'
            console.log(colors().azul(mensagem))
            resolve(true)
          } else {
            const mensagem = '# Dominio.com.br: Não Disponível'
            console.log(colors().vermelho(mensagem))
            resolve(false)
          }
        })
    })
  }

  return methods
}

module.exports = Module
