const { app } = require('./Controllers/index')
require('dotenv').config()

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001')
})
