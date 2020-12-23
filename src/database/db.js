//Configurar a dependencia
const sqlite3 = require('sqlite3').verbose() //Verbose quero ver info no console

//Criar objeto que irá fazer operacoes no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db


db.serialize(() => {
    //Com comandos SQL

    //Criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );   
//     `)

//     //Inserir dados na tabela 
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?)
// `
//     const values = [
//         "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cmVjeWNsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
//         "Papersider",
//         "Guilherme Gambella, Jardim América",
//         "Numero 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletronicos e Lampadas"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err);
//         }

//         console.log('Cadastrado com sucesso')
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)//CallBack está como referencia


    //Deletar uma tabela

    // db.run(`DELETE FROM places`,  function (err) {
    //     if (err) {
    //         return console.log(err);
    //     }

    //     console.log('Registro deletado com sucesso')
    // })

    // Consultar os dados da tabela
    // db.all(`SELECT name FROM places`, function (err, rows) {
    //     if (err) {
    //         return console.log(err);
    //     }

    //     console.log('Aqui estão seus registros');
    //     console.log(rows)
    // })
})