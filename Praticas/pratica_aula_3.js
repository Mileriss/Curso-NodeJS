const http = require('http')
const fs = require('fs')
const porta = 3000
const host = '127.0.0.1'

http.createServer((req, res)=>{
    fs.readFile('teste.html', (err, arquivo)=>{
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(arquivo)
        res.end()
    })
}).listen(porta, host, ()=>{console.log("Servidor em execução...")})