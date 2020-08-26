/* Requires */

const axios = require('axios')

/* Module */

const Module = () => {
  const methods = {}

  methods.request = (nome) => {
    const url = `https://www.instagram.com/${nome}`
    const option = { method: 'GET' }

    return new Promise((resolve, reject) => {
      axios.get(url, option)
        .then(response => resolve(response.status))
        .catch(error => resolve(error.response.status))
    })
  }

  return methods
}

module.exports = Module
