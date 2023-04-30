const Moment = require('moment')

function validateFields(initialDate, endDate, idServicio) {
  const initialValidDate = Moment(initialDate, 'DD/MM/YYYY', true).isValid()
  const endValidDate = Moment(endDate, 'DD/MM/YYYY', true).isValid()

  if (!initialValidDate || !endValidDate) {
    throw Error('Las fechas no estan en el formato valido o estan vacias')
  }

  if (!idServicio) {
    throw Error('el id del servicio no puede estar vacio')
  }

  return {
    initialDate,
    endDate,
    idServicio,
  }
}

module.exports = { validateFields }
