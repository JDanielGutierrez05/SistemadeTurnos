const { connect } = require('./connection')

async function createDuties() {
  const db = await connect()
  return (await db.query('select * from public.createduties();')).rows
}

module.exports = { createDuties }
