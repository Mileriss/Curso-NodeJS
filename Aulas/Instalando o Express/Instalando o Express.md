# O que é o Express  
Express é um módulo no Node JS que facilita a criação e uso do servidor, fornecendo comandos e funções que deixam a manipulação do servidor mais rapida e prática.  

## Instalando o Express  
O Express é um módulo externo e precisa ser instalado dentro do repositório que você deseja criar o servidor.   
Para realizar a instalação basta rodar o comando `npm install express --save` pelo CMD dentro do repositório onde o servidor será criado.  
- Abra o CMD (Terminal) dentro da pasta onde será criado o servidor  
- Digite o comando: `npm install express --save`  
- O terminal vai realizar a instalação e criar uma pasta **node_modules** um **package.json** e um **package-lock.json**  
- O módulo está pronto para ser utilizado  

## Utilizando o express  
Para criar um servidor básico com Express é mais prático e leva menos linhas de código, veja um exemplo abaixo:  
```
COM EXPRESS                             | SEM EXPRESS
const express = require('express')      | const http = require('http')
const app = express()                   | const porta = 3000
const porta = 3000                      | const host = '127.0.0.1'
const host = '127.0.0.1'                |
                                        | http.createServer((req, res)=>{
app.get('/', (req,res)=>{               |   res.writeHead(200,{'Content-Type':'text/plain'})
    res.send("Teste com express")       |   res.write("Teste sem express")
})                                      |}).listen(porta, host, ()=>{console.log("Servidor em execução...")})

app.listen(porta, host, ()=>{console.log("Servidor em execução...")})

```
- `express = require('express')` - O Express não utiliza o módulo http, ao indicarmos Express ele vai retornar o módulo que instalamos e com todas as suas funcionalidades  
- `app = express()` - Variável que vai armazenar todas as funcionalidades express  
- `get` - Requisição para indicar a função que a porta principal ('/') vai executar  
- `send` - Resposta que vai ser exibida/executada quando a requisição estiver de acordo  

