console.log('Express Tutorial');

const http = require('http');
var count = 0;

// call back function invoked everytime user reaches server
const server = http.createServer((req, res) => {
  count++;
  console.log('User hit server: ' + count);
  res.end('Hello! Welcome');
})
// listen for msg coming into port 5001
server.listen(5001);
