require('dotenv').config();

const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estatico
app.use( express.static('public'))

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Karen Mep',
        titulo: 'Curso de node'
    })
})
app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Karen Mep',
        titulo: 'Curso de node'
    })
})
app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Karen Mep',
        titulo: 'Curso de node'
    })
})
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html')
    })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

