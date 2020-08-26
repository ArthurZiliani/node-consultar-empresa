/* Requires */

const layoutCLI = require('./layouts/cli')
const controllerFacebook = require('./controllers/facebook')
const controllerInstagram = require('./controllers/instagram')
const controllerDominioComBr = require('./controllers/dominio-com-br')

/* Start */

const start = async () => {
  if (!process.argv[2]) layoutCLI().imprimirGuia()

  layoutCLI().imprimirCabecalho()
  nomeEmpresa = process.argv[2]
  console.log('# Nome: ' + nomeEmpresa)

  await controllerFacebook().verificarDisponibilidade(nomeEmpresa)
  await controllerInstagram().verificarDisponibilidade(nomeEmpresa)
  await controllerDominioComBr().verificarDisponibilidade(nomeEmpresa)

  layoutCLI().pularLinha()
}
start()
