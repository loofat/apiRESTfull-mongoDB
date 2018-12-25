const express = require('express')
const app = express()
const port = process.env.PORT || 8888
const bodyParser = require('body-parser')
const { router } = require('./routes/routes.js')

app.use(bodyParser.urlencoded({extended: true}))
app.use('/', router)


if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load()
}

app.listen(port, () => {
  console.log("App running on port 8888")
})

module.exports = app
