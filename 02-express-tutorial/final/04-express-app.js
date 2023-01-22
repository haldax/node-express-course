const express = require('express')
// import path module to have all attributes
const path = require('path')
const app = express()

// setup static resources path and middleware
// static: a file that server does not need to change
app.use(express.static('./public'))

app.get('/', (req, res) => {
  // find the absolute path to a file and send the file
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})
