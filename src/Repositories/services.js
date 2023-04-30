const { connect } = require('./connection')

async function getAll() {
  const db = await connect()
  await db.query('SELECT * FROM comercios', function (error, results, fields) {
    if (error) {
      throw error
    }
    return JSON.parse(JSON.stringify(results[0]))
  })
}

module.exports = { getAll }
