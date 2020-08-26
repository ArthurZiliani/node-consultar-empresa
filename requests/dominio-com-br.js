/* Requires */

const axios = require('axios')

/* Module */

const Module = () => {
  const methods = {}

  methods.request = (nome) => {
    const url = `https://registro.br/v2/ajax/avail/raw/${nome}.com.br`
    const option = { method: 'GET' }

    return new Promise((resolve, reject) => {
      axios.get(url, option)
        .then(response => resolve(response.data.status))
        .catch(error => resolve(error))
    })
  }

  return methods
}

module.exports = Module
