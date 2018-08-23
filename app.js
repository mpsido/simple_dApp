const https = require('https');
const fs = require('fs'); //file reading module needed to read the generated ssl keys
const http = require('http');

const key = fs.readFileSync('./domain.key');
const cert = fs.readFileSync('./domain.crt');
// const ca = fs.readFileSync('encryption/ca_bundle.crt');

const options = {
  key,
  cert,
  //ca = cert, //this is a cheat trick, you don't need authentification for now, just user yourself as Certification Authority
};


var content = fs.readFileSync('./index.html');
var app = function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content);
};

port = 1234; // you don't have to choose the same as me ;)
// app.listen(port); // comment out this line if you don't want to serve non https requests anymore
https.createServer(options, app).listen(port); // https will decrypt the requests and transfer them to your app.