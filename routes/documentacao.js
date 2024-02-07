const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../config/swagger_saida.json')

module.exports = function(app) {
    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
}