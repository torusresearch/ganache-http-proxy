#!/usr/bin/env node


var fs = require('fs');
var httpProxy = require('http-proxy');

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