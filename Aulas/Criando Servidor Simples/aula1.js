const http = require('http')

http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/plain'})
    response.write("Texto indicando que a conexao funcionou! \n")
    response.write("Linha adicional apenas para teste")
    response.end()
}).listen(1337)