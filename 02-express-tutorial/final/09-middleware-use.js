const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//  req => middleware => res
// place before get -> use middleware before all routing
// use multiple middleware functions, place them in an array
// order in the array matters
app.use([logger, authorize])
// use in all routing with /api: api/home/about/products
// app.use('./api', logger)
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})

/*
app.get('/api/products',[logger, authorize], (req, res) => {
  res.send('Products')
})
*/
app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
