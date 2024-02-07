const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_saida.json'
const endpointsFiles = ['../routes/*']

swaggerAutogen(outputFile, endpointsFiles);