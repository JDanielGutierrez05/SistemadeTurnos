const Moment = require('moment')

function validateFields(initialDate, endDate, serviceId) {
  const initialValidDate = Moment(initialDate, 'DD/MM/YYYY', true).isValid()
  const endValidDate = Moment(endDate, 'DD/MM/YYYY', true).isValid()

  if (!initialValidDate || !endValidDate) {
    throw Error('Las fechas no estan en el formato valido o estan vacias')
  }

  if (!serviceId) {
    throw Error('el id del servicio no puede estar vacio')
  }

  return {
    initialDate: Moment(initialDate, 'YYYY-MM-DD').toISOString(),
    endDate: Moment(endDate, 'YYYY-MM-DD').toISOString(),
    serviceId,
  }
}

module.exports = { validateFields }
