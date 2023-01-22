const express = require('express')
const app = express()

// destructured object from data file
const { products } = require('../data')
// sending json data
app.get('/', (req, res) => {
  res.json(products)
})

app.listen(5001, () => {
  console.log('Server is listening on port 5000....')
})
