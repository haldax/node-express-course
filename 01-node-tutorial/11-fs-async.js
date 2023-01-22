// readFileSync is synchronous, readFile is asynchronous
const { readFile, writeFile } = require('fs')

console.log('start')
// third argument is a callback function
// if without encoding, we are only getting integers
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
       (err, result) => {
          if (err) {
              console.log(err)
              return
            }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')
