const Module = () => {
  const methods = {}

  // Internal Variables

  const RESET = '\x1b[0m'
  const VERMELHO = '\x1b[31m'
  const VERDE = '\x1b[32m'
  const AMARELO = '\x1b[33m'
  const AZUL = '\x1b[34m'

  // Methods

  methods.vermelho = (conteudo) => {
    return VERMELHO + conteudo + RESET
  }

  methods.verde = (conteudo) => {
    return VERDE + conteudo + RESET
  }

  methods.amarelo = (conteudo) => {
    return AMARELO + conteudo + RESET
  }

  methods.azul = (conteudo) => {
    return AZUL + conteudo + RESET
  }

  return methods
}

module.exports = Module
