// Criando um servidor simples utilizando o Express
const express = require('express')
const app = express()
const porta = 3000
const host = '127.0.0.1'

app.get('/', (req,res)=>{
    res.send("Pagina principal")
})
app.listen(porta, host, ()=>{console.log("Servidor em execução...")})


// Criando um servidor com diferentes rotas
const express = require('express')
const app2 = express()
const porta2 = 3000
const host2 = '127.0.0.1'

app2.get('/', (req,res)=>{
    res.send("Pagina principal")
})
app2.get('/pagina1', (req,res)=>{
    res.send("Pagina 1")
})
app2.get('/pagina2', (req,res)=>{
    res.send("Pagina 2")
})

app2.listen(porta2, host2, ()=>{console.log("Servidor 2 em execução...")})