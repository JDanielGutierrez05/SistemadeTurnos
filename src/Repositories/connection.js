const { Pool } = require('pg')

let connection

async function connect() {
  if (!connection) {
    const pool = new Pool({
      user: process.env.DB_USERNAME,
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: process.env.PORT,
    })
    connection = await pool.connect()
  }
  return connection
}

module.exports = { connect }
