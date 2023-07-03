# Criando um servidor simples com NODE JS  
Para criar um servidor com o Node é necessário indicar uma requisição para um objeto HTTP e a partir desse objeto criar uma resposta que será enviada para a porta HTTP que for indicada.  
Um servidor disponibiliza diversas requisições HTTP e cada uma foi criada para executar uma determinada funcionalidade.  

**Site para consultar as requisições HTTP disponíveis para um servidor:** [Exemplos de requisições HTTP](https://http.cat/)  

## const http = require('http')  
O valor `require('http')` vai ser o inicio da criação do servidor. Através dessa constante a gente vai conseguir utilizar os comandos e funções do Node JS no nosso código.  

## http.createServer()  
Essa é a função utilizada para a criação de um servidor, utilizando o `http` que foi definido anteriormente, vamos utilizar a função `createServer()` para iniciar a construção do servidor.  

## http.createServer((request, response)=>{})  
É necessário indicarmos uma **Arrow function** dentro da função `createServer` e atribuir 2 parametros: `request` e `response`  
- **`REQUEST`** - É o parametro utilizado para criar uma requisição no servidor, ou seja, uma solicitação.  
- **`RESPONSE`** - É o parametro utilizado para criar uma resposta, utilizando um protocolo HTTP e diversas funcionalidades do NODE.  

## response.writeHead(200,{'Content-Type':'text/plain'})  
É a função utilizada em conjunto ao parametro `response` para retornar uma resposta no cabeçalho da página, indicando a requisição HTTP e o tipo de conteudo que será exibido.  
- **`200`** - É a requisição HTTP -> [Clique aqui](https://http.cat/status/200)  
- **`Content-Type: text/plain`** - É o tipo de conteudo que será retornado, neste caso um conteudo do tipo **texto simples**  

## response.write('Texto que será retornado')  
É o atributo que vai permitir que você digite o texto que deseja retornar quando a requisição for acionada.  

## response.end()  
É a função que define o final da resposta, ou seja, tudo que estiver dentro do escopo vai ser executado e quando chegar na parte `response.end()` será finalizado.  

## .listen(1337)  
É a função que vai definir onde esse servidor deverá ser executado, neste caso, o numero `1337` é relacionado ao nosso **localhost** que é equivalente ao servidor local (servidor localizado apenas na sua rede).  

# Sintaxe  
```
const http = require('http')

http.createServer((request, response)=>{
    response.writeHead(200, {'Content-Type':'text/plain'})
    response.write("Texto indicando que a conexão funcionou!")
    response.end()
}).listen(1337)
```

