const mysql = require('mysql')

let connection = {}

const connect = async () => {
  if (!connection) {
    var client = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    })
    connection = client.connect()
  }
  console.log('ome ome', connection)
  return connection
}

module.exports = { connect }
