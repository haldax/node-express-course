// get back the class
// if want custom extend from class
// otherwise just for emitting and handling events create instance
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on and emit methods
// keep track of the order
// additional arguments
// built-in modules utilize it

// add listener functions - what to do when an event is emitted
customEmitter.on('response', (name, id) => {
  console.log(`data received user ${name} with id:${id}`)
})
// can have many functions for one event
customEmitter.on('response', () => {
  console.log('some other logic here')
})
// emit (triggering events) needs to go the last
customEmitter.emit('response', 'john', 34)
