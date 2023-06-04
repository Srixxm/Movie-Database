require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 3939
const moviesdb = require('./routes/movies')
const mongoose = require('mongoose')

app.use(express.json())
// app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.My_url)
const db = mongoose.connection
db.on('error', errorMessage => console.log(errorMessage))
db.once('open', ()=> console.log('connection established'))


app.use('/api/v1/movies', moviesdb)

app.get(('/'), (request, response) => {
    response.send("welcome to my Movie Database")
})

app.listen(PORT, console.log('listening in port '))