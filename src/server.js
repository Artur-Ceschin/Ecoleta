const express = require('express')
const server = express()

//Utilizando o Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
    express:server,
    noCache: true
})

//Coloque a public disponível 
server.use(express.static("public"))

//res => resposta
//Rota página inicial
server.get("/", function (req, res) {
    return res.render("index.html")
})

server.get("/create-point", function (req, res) {
    return res.render("create-point.html")
})

server.get("/search", function (req, res) {
    return res.render("search.html")
})



//Ligar servidor
server.listen(3333)
