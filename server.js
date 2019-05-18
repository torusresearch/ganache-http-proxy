#!/usr/bin/env node


var fs = require('fs');
var httpProxy = require('http-proxy');
console.log("This proxy server routes https://localhost:8545 traffic to http://localhost:8546")
try {
  httpProxy.createServer({
    target: {
      host: 'localhost',
      port: 8546
    },
    ssl: {
      key: fs.readFileSync('server.key', 'utf8'),
      cert: fs.readFileSync('server.cert', 'utf8')
    }
  }).listen(8545);
} catch (e) {
  console.log("Error occured, is ganache running on port 8546?", e)
}