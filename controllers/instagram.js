/* Requires */

const colors = require('../layouts/colors')
const requestInstagram = require('../requests/instagram')

/* Module */

const Module = () => {
  const methods = {}

  // Methods

  methods.verificarDisponibilidade = (nome) => {
    return new Promise((resolve, reject) => {
      requestInstagram().request(nome)
        .then(status => {
          if (status === 404) {
            const mensagem = '# Instagram: Disponível'
            console.log(colors().azul(mensagem))
            resolve(true)
          } else {
            const mensagem = '# Instagram: Não Disponível'
            console.log(colors().vermelho(mensagem))
            resolve(false)
          }
        })
    })
  }

  return methods
}

module.exports = Module
