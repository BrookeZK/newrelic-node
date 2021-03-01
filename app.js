const newrelic = require('newrelic')
const express = require('express')
const app = express()
const port = 3000
var path = require('path')

// console.log(newrelic)

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})