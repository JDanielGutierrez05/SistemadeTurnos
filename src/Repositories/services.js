const { connect } = require('./connection')

const getAll = async () => {
  const get = await connect()
  console.log('get', get)
}

module.exports = { getAll }
