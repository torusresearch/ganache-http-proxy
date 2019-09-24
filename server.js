#!/usr/bin/env node

var httpProxy = require("http-proxy");
const mkcert = require("mkcert");

console.log("This proxy server routes https://localhost:8545 traffic to http://localhost:8546");
try {
  mkcert
    .createCA({
      organization: "Torus Labs",
      countryCode: "SG",
      state: "Singapore",
      locality: "Singapore",
      validityDays: 365
    })
    .then(ca =>
      mkcert.createCert({
        domains: ["127.0.0.1", "localhost"],
        validityDays: 365,
        caKey: ca.key,
        caCert: ca.cert
      })
    )
    .then(cert => {
      httpProxy
        .createServer({
          target: {
            host: "3.112.248.50"
          },
          ssl: {
            key: cert.key,
            cert: cert.cert
          }
        })
        .listen(5000);
        httpProxy
        .createServer({
          target: {
            host: "13.113.137.8"
          },
          ssl: {
            key: cert.key,
            cert: cert.cert
          }
        })
        .listen(5001);
        httpProxy
        .createServer({
          target: {
            host: "3.112.7.31"
          },
          ssl: {
            key: cert.key,
            cert: cert.cert
          }
        })
        .listen(5002);
        httpProxy
        .createServer({
          target: {
            host: "18.179.12.221"
          },
          ssl: {
            key: cert.key,
            cert: cert.cert
          }
        })
        .listen(5003);
        httpProxy
        .createServer({
          target: {
            host: "52.68.222.184"
          },
          ssl: {
            key: cert.key,
            cert: cert.cert
          }
        })
        .listen(5004);
    });
} catch (e) {
  console.log("Error occured, is ganache running on port 8546?");
}