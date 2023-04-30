const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const { parsingDates } = require('../Utilities/commons')

const app = express()
app.use(bodyParser.json())
app.use(cors())

// adding Helmet to enhance your Rest API's security
app.use(helmet())

app.post('/turnos', (request, response) => {
  try {
    dates = parsingDates(request.body.fecha_inicio, request.body.fecha_fin)
    response.send(dates)
  } catch (error) {
    console.error(error)
    response.status(400).send({ error: error.message })
  }
})

exports.app = app
