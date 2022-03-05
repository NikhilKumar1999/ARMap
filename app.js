const app = require('express')
const https = require('https')
const fs = require('fs')
pcerti = fs.readFileSync('server.crt')
pkey = fs.readFileSync('key.pem')
option={
  key: pkey,
  cert: pcerti
}



https.createServer(option,function(req,res){
  res.writeHead(200);
  fs.readFile('public/jhj.html', (err, data) => {
    if (err) throw err;
    res.end(data);
  });
}).listen(3000,'192.168.0.102',()=>{
  console.log('listening')
})
