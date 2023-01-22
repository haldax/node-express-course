const { readFile, writeFile } = require('fs').promises
// this is equal to below:
/*
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)
*/

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`, { flag: 'a' })
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()

// this is equal to below - creating our own wrapper function with promise object:
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
//
// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))