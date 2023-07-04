// Criando o servidor com 3 rotas diferentes
const http = require('http')
const porta = 3000
const host = '127.0.0.1'

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    if(req.url == '/'){
        res.write("<h1>Pagina principal")
    }
    else if(req.url == '/pag-1'){
        res.write("<h1>Primeira pagina</h1>")
        res.write("<p>Primeira rota</p>")
    }
    else if(req.url == '/pag-2'){
        res.write("<h1>Segunda pagina</h1>")
        res.write("<p>Segunda rota</p>")
    }
    else if(req.url == '/pag-3'){
        res.write("<h1>Terceira pagina</h1>")
        res.write("<p>Terceira rota</p>")
    }
<<<<<<< HEAD

=======
>>>>>>> Praticas
    res.end()
}).listen(porta, host, ()=>{console.log("Servidor em execução...")})