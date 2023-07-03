// Servidor com entrada de texto simples
const http = require('http')
const porta = 3000
const host = '127.0.0.1'

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write("Pratica da aula 1 de Node JS\n")
    res.write("Linha adicional para teste")
    res.end()
}).listen(porta, host, ()=>{console.log("Servidor em execução...")})

// Servidor com entrada de texto em HTML
const http2 = require('http')
const porta2 = 3000
const host2 = '127.0.0.1'

http2.createServer((req2, res2)=>{
    res2.writeHead(200,{'Content-Type':'text/html'})
    res2.write("<h1>Titulo da pagina</h1>")
    res2.write("<p>Primeiro paragrafo da pratica</p>")
    res2.write("<p>Segundo paragrafo da pratica</p>")
    res2.end()
}).listen(porta2, host2, ()=>{console.log("Servidor 2 em execução...")})