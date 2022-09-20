const swaggerAutogen = require('swagger-autogen')()
const outputFile = './swagger_output.json'

const doc = {
  info: {
    version: '1',
    title: 'Senac',
    description: 'Senac'
  },
  host: 'localhost:80',
  definitions: {}
}
swaggerAutogen(outputFile, ['./endpoint.js'], doc)
