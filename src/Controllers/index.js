const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const { validateFields } = require('../Utilities/commons')
const { getAll } = require('../Repositories/duties')

const app = express()
app.use(bodyParser.json())
app.use(cors())

// adding Helmet to enhance your Rest API's security
app.use(helmet())

app.post('/turnos', async (request, response) => {
  try {
    fields = validateFields(
      request.body.fecha_inicio,
      request.body.fecha_fin,
      request.body.id_servicio
    )
    const result = await getAll()
    response.send(result)
  } catch (error) {
    console.error(error)
    response.status(400).send({ error: error.message })
  }
})

exports.app = app
