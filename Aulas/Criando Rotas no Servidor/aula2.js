const http = require('http')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((request, response)=>{
    response.writeHead(200,{'Content-Type':'text/html'}) //O texto definido é HTML porque as rotas vão levar para páginas HTML
    if(request.url == "/"){
        response.write("<h1>Pagina inicial - Pagina padrao</h1>")
    }
    else if(request.url == "/pagina1"){
        response.write("<h1>Primeira pagina</h1>")
    }
    else if(request.url == "/pagina2"){
        response.write("<h1>Segunda pagina</h1>")
    }
    response.end()
})

servidor.listen(porta, host, ()=>{console.log("Servidor em execução...")})