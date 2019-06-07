const express = require('express');
const handlebars = require("express-handlebars")
const app = express();


app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', "handlebars")




app.get('/',(req, res) =>{
    res.send("Hello Word")
})

app.get("/cadastro", (req, res) =>{
    res.render('Formulario')
})
app.listen(8080);