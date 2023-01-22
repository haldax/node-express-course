// import the module
const express = require('express')
// invoke it getting a server
const app = express()

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})

// all other requests not found
// chaining status code with body msg
app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

// server listening to port 5000
app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
