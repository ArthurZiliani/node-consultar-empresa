/* Requires */

const colors = require('../layouts/colors')
const requestFacebook = require('../requests/facebook')

/* Module */

const Module = () => {
  const methods = {}

  // Methods

  methods.verificarDisponibilidade = (nome) => {
    return new Promise((resolve, reject) => {
      requestFacebook().request(nome)
        .then(status => {
          if (status === 404) {
            const mensagem = '# Facebook: Disponível'
            console.log(colors().azul(mensagem))
            resolve(true)
          } else {
            const mensagem = '# Facebook: Não Disponível'
            console.log(colors().vermelho(mensagem))
            resolve(false)
          }
        })
    })
  }

  return methods
}

module.exports = Module
