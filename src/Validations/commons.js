const Moment = require('moment')

function validateFields(initialDate, endDate, serviceId) {
  const initialValidDate = Moment(initialDate, 'DD/MM/YYYY', true).isValid()
  const endValidDate = Moment(endDate, 'DD/MM/YYYY', true).isValid()

  if (!initialValidDate || !endValidDate) {
    throw Error('Las fechas no estan en el formato valido o estan vacias')
  }

  if (!serviceId) {
    throw Error('El id del servicio no puede estar vacio')
  }

  if (Moment(initialDate).toNow() > Moment(endDate).toNow()) {
    throw Error('La fecha final no puede ser anterior a la fecha inicial')
  }

  return {
    initialDate: new Date(
      Moment(initialDate, 'DD/MM/YYYY').format('YYYY/MM/DD')
    ),
    endDate: new Date(Moment(endDate, 'DD/MM/YYYY').format('YYYY/MM/DD')),
    serviceId,
  }
}

module.exports = { validateFields }
