//Rotas são caminhos para aplicação
const express = require('express');
const app = express();
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')


// Config
    //Template Engine
    app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
    app.set('view engine', 'handlebars')

    //Definindo caminho certo para o formulario
    app.set('views', 'C:\\Users\\kyoto\\Documents\\app\\views')

    //Conexão com o banco de dados Mysql
    const sequelize = new Sequelize('test', 'root', 'moura2007', {
        host: "localhost",
        dialect: "mysql"
    })

//Rotas

    app.get('/cad', function(req, res){
        res.render('form');
    })

    app.post('/add', function(req, res){
        res.send('FORMULÁRIO RECEBIDO')
    })


app.listen(8081, function(){
    console.log("Servidor Rodando na URL: http://localhost:8081");
});
