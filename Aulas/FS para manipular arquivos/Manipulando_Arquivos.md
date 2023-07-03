# Manipulando arquivos com node  
A manipulação de arquivos é sempre util e necessária para realizarmos requisições e enviarmos respostas com determinado conteudo, como por exemplo, criar rotas para exibir uma página html em cada requisição diferente.  

## Módulo FS  
`FS` é um modulo que permite que a gente utilize os atributos de manipulação de arquivos.  
Através deste módulo é possível:  
- Ler arquivos  
- Salvar arquivos  
- Criar Arquivos  
- Deletar/Excluir arquivos 
- E etc....  

## Utilizando o módulo FS  
Para utilizar o FS é necessário atribuir ele a uma constante ou váriavel e indicar o `require` como um atributo obrigatório.  
**Sintaxe:** `const fs = require('fs')`  

## Lendo arquivos HTML com FS  
A sintaxe para ler um arquivo HTML é essa:  
```
const fs = require('fs')

fs.readFile('teste.html', (err, arquivo)=>{})

```  
`fs.readFile()` - Comando utilizado para a leitura de arquivos  
`'teste.html'` - Nome atribuido ao arquivo HTML  
`err` - Parametro de erro, caso dê algum erro na leitura, o parametro `err` vai indicar uma mensagem de erro padrão  
`arquivo` - Parametro que vai receber o arquivo html, nomeado como arquivo para facilitar a leitura  

# Sintaxe  
```
const http = require('http')
const fs = require('fs')
const porta = 3000
const host = '127.0.0.1'

http.createServer((res, res)=>{
    fs.readFile('teste.html', (err, arquivo)=>{
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(arquivo)
        res.end()
    })
}).listen(porta, host, ()=>{console.log("Servidor em execução...")})
```