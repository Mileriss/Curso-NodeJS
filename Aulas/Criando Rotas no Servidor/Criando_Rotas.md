# Criação de rotas para o servidor    
A criação e uso de rotas é importante para que o usuário consiga enxergar diferentes conteudos em diferentes locais em um servidor, por exemplo, um site que tem 3 caminhos diferentes é muito mais organizado do que um site que tenha todo o conteudo em uma unica página.  

## Constantes recomendadas  
Ao criar um servidor é interessante colocar algumas informações padrões dentro de constantes para facilitar o uso e organizar melhor o código. Neste exemplo abaixo as informações mais práticas serão armazenadas em variáveis, sendo elas:  
**OBS: O nome utilizado nas constantes vai de acordo com o desejo de cada um**  

- `const http = require('http')`  
  - Criação da requisição HTTP  
- `const porta = 3000`  
  - Porta de saída padrão utilizada pelo servidor  
- `const host = '127.0.0.1'`
  - Vai indicar o servidor local da máquina, é equivalente ao **localhost** e ao **1337**  
- `const servidor = http.createServer((request, response)=>{})`
  - Vai armazenar o comando de criação do servidor  

## Criando rotas  
A criação de rotas deverá ser definida dentro de uma estrutura de tomada de decião (IF, Else IF e ELSE) e de acordo com a condição alcançada a porta será exibida no servidor.  
A rota é definida na URL do navegador, então o caminho selecionado vai exibir todo o conteudo de resposta de acordo com o que estiver na condição.  

### Primeira rota  
Essa rota indica o caminho do **ROOT**, ou seja, a página padrão.  
**URL - localhost:3000**
```
if(request.url == '/'){
    response.write("Página inicial / Página padrão")
}
```

### Segunda rota  
Essa rota indica o caminho para uma outra página de acordo com o que foi definido pelo programador  
**URL - localhost:3000/pagina1**
```
else if(request.url == '/pagina1'){
    response.write("Primeira página")
}
```

### Terceira rota  
Essa rota indica o caminho para outra página  
**URL - localhost:3000/pagina2**
```
else if(request.url == '/pagina2'){
    response.write("Segunda página")
}
```

## Indicando parametros para o atributo LISTEN  
O atributo `Listen` é o responsável por conduzir o servidor pela porta desejada, o local desejado e indica uma mensagem de backlog (Caso desejado).  
***Backlog*** - É a mensagem de retorno que o servidor passa quando iniciamos uma aplicação.  
```
servidor.listen(porta, host, ()=>{console.log("Servidor em execução...")})
```
- `porta` - Constante criada para indicar o caminho da porta de saida  
- `host` - Constante criada para indicar o local que o servidor deve rodar  
- `()=>{}` - Arrow function criada para exibir a funcionalidade do Backlog, neste caso apenas um texto.  

# Sintaxe  
```
const http = require('http')
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((request, response)=>{
    response.writeHead(200,{'Content-Type':'text/html'})
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

```

 
