const { connect } = require('./connection')

async function getAll() {
  const db = await connect()
  return (await db.query('SELECT * FROM comercios')).rows
}

module.exports = { getAll }
