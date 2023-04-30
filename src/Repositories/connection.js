const mysql = require('mysql')

let connection

async function connect() {
  if (!connection || !connection.getConnection()) {
    connection = mysql.createPool({
      connectionLimit: 10,
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    })
  }
  return connection
}

module.exports = { connect }
