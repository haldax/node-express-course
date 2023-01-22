const express = require('express')
const app = express()
const { products } = require('../data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})
// not sending all the data, but reduced version
app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product
    return { id, name, image }
  })

  res.json(newProducts)
})

// getting details for a single product
// :productID is a placeholder, assign the parameter in the request to this variable
app.get('/api/products/:productID', (req, res) => {
  //console.log(req)
  //console.log(req.params)
  // :productID is the params
  const { productID } = req.params

  const singleProduct = products.find(
      // casting productID (it's a string) to a number
    (product) => product.id === Number(productID)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})
// parameters can get very complicated
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  //console.log(req.params)
  res.send('hello world')
})
// url parameters
app.get('/api/v1/query', (req, res) => {
  console.log(req.query)
  // the attributes from query called search and limit
  const { search, limit } = req.query
  // spread syntax,  allows an iterable, such as an array or string,
  // to be expanded in places
  // where zero or more arguments (for function calls) or elements (for array literals) are expected.
  let sortedProducts = [...products]

  // search not null
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {return product.name.startsWith(search)})
  }
  // limit not null
  if (limit) {sortedProducts = sortedProducts.slice(0, Number(limit))}
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    // more common approach is to send empty result
    // always use return if there is more code
    return res.status(200).json({ success: true, data: [] })
  }
  res.status(200).json(sortedProducts)
})

app.listen(5001, () => {
  console.log('Server is listening on port 5001....')
})
