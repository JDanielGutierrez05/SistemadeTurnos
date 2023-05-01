const { connect } = require('./connection')

async function createDuties(filters) {
  const db = await connect()
  return (
    await db.query(`select * from public.createduties($1, $2, $3);`, [
      filters.initialDate,
      filters.endDate,
      filters.serviceId,
    ])
  ).rows
}

module.exports = { createDuties }
