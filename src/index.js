const express = require('express')
const app = express()
const hbs = require('hbs')

app.set('view engine', 'hbs')
app.set('views', `${__dirname}/templates/views`)
hbs.registerPartials(`${__dirname}/templates/partials`)

app.get('', (req, res)=>{
    //res.sendFile(__dirname + "/" + "index.html")
    res.render('index')
})

app.listen(3000)