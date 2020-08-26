/* Requires */

const colors = require('../layouts/colors')

/* Module */

const Module = () => {
  const methods = {}

  methods.imprimirCabecalho = () => {
    methods.limparConsole()
    console.log('####')
    console.log('#')
    console.log('# NODE CONSULTAR EMPRESA')
    console.log('#')
    console.log('###')
    methods.pularLinha()
  }

  methods.imprimirGuia = () => {
    console.log(colors().vermelho('# Você não definiu o nome da empresa'))
    console.log('# Exemplo de uso: ' + colors().amarelo('node app.js mcdonalds'))
    methods.pularLinha()
    process.exit()
  }

  // Funcoes Auxliares

  methods.limparConsole = () => {
    console.clear()
  }

  methods.pularLinha = () => {
    console.log('')
    console.log('')
  }

  return methods
}

module.exports = Module
