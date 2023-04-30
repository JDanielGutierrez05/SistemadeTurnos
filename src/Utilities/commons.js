const Moment = require('moment')

const parsingDates = (initialDate, endDate) => {
  const initialValidDate = Moment(initialDate, 'DD/MM/YYYY', true).isValid()
  const endValidDate = Moment(endDate, 'DD/MM/YYYY', true).isValid()

  if (!initialValidDate || !endValidDate) {
    throw Error('Las fechas no estan en el formato valido o estan vacias')
  }

  return {
    initialDate,
    endDate,
  }
}

module.exports = { parsingDates }
