const express = require('express')
const server = express()

//Pegar Banco de dados 
const db = require('./database/db')

//Habilitar o uso do req.booy na nossa aplicacao
server.use(express.urlencoded({
    extended: true
}))

//Utilizando o Nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
    express: server,
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

server.post("/save-point", function (req, res) {

    // req.body: o corpo do formuário
    //Inserir dados na tabela 
    const query = `
    INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?,?)
`
    const values = [
        req.body.image, 
        req.body.name, 
        req.body.address, 
        req.body.address2, 
        req.body.state, 
        req.body.city, 
        req.body.items, 
    ]

    function afterInsertData(err) {
        if (err) {
             console.log(err);

             return res.send("Erro no cadastro")
        }

        console.log('Cadastrado com sucesso')
        console.log(this)
        return res.render("create-point.html", { saved : true })
    }

    db.run(query, values, afterInsertData)//CallBack está como referencia





})

server.get("/search", function (req, res) {

    const search = req.query.search

    if(search == "") {
        return res.render('search.html', { total: 0 })
    }
    
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows) {
        if(err) {
            return console.log(err)
        }
        const total = rows.length;

        // mostrar a página html com os dados do banco de dados
        return res.render("search.html", {
            places: rows,
            total
        });
    })


})



//Ligar servidor
server.listen(3333)