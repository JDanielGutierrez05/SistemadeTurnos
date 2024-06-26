const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const { validateFields } = require('../Validations/commons')
const { createDuties } = require('../Repositories/duties')

const app = express()
app.use(bodyParser.json())
app.use(cors())

// adding Helmet to enhance your Rest API's security
app.use(helmet())

app.post('/turnos', async (request, response) => {
  try {
    filters = validateFields(
      request.body.fecha_inicio,
      request.body.fecha_fin,
      request.body.id_servicio
    )

    response.send(
      await createDuties({
        initialDate: filters.initialDate,
        endDate: filters.endDate,
        serviceId: filters.serviceId,
      })
    )
  } catch (error) {
    console.error(error)
    response.status(400).send({ error: error.message })
  }
})

exports.app = app
