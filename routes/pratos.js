const controllerPratos =  require('../controllers/pratos');
var bodyParser = require('body-parser');
const verificaToken = require('../config/autenticacaoConfig') 

module.exports = function(app) {
    // create application/json parser
    var jsonParser = bodyParser.json()
    
    app.use(function(req, res, next) {
        res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept");
        next();
    });

    app.get('/', controllerPratos.testeApi);
    app.post('/criar-prato', jsonParser, verificaToken, controllerPratos.criarPrato);
    app.get('/listar-pratos', controllerPratos.listarPratos);
    app.delete('/deletar-prato/:id',verificaToken, controllerPratos.deletarPrato);
    app.put('/atualizar-prato/:id', jsonParser, verificaToken, controllerPratos.atualizarPrato);
}