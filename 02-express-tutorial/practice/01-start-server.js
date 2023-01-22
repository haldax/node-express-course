console.log('Express Tutorial');

const http = require('http');
let count = 0;

// call back function invoked everytime user reaches server
const server = http.createServer((req, res) => {
    count++;
    console.log('User hit server: ' + count);
    res.writeHead(200, {'content-type':'text/plain'})
    // if it's html, head needs to be text/html
    // always call res.end
    res.end('Hello! Welcome');
})
// listen for msg coming into port 5000
server.listen(5001);
