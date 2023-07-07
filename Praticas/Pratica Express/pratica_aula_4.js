// Criando um servidor simples utilizando o Express
const express = require('express')
const app = express()
const porta = 3000
const host = '127.0.0.1'

app.get('/', (req,res)=>{
    res.send("Servidor simples com Express")
})
app.listen(porta, host, ()=>{console.log("Servidor em execução...")})

// Criando um servidor com várias rotas utilizando o Express
const express2 = require('express')
const app2 = express()
const porta2 = 3000
const host2 = '127.0.0.2'

app2.get('/', (req,res)=>{
    res.send("Pagina principal")
})
app2.get('/pag1', (req,res)=>{
    res.send("Pagina 1")
})
app2.get('/pag2', (req,res)=>{
    res.send("Pagina 2")
})
app2.get('/pag3', (req,res)=>{
    res.send("Pagina 3")
})

app2.listen(porta2, host2, ()=>{console.log("Servidor 2 em execução...")})