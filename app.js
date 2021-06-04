const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 1000

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Hello server is running' })
})

app.post('/Employee', db.insertEmployee)
app.post('/Universe', db.insertUniverse)
app.post('/accounts', db.insertaccounts)


app.listen(1000, () => {
  console.log(` running.`);
});
