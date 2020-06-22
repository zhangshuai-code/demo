// node-创建一个简单的服务
const http = require('http')
const fs = require('fs')
const files = fs.readFileSync('./a.js')
console.log(files)
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end(files)
})

server.listen(3000, () => {
  console.log('服务启动了')
})