const express = require('express')
const app = express()
const ejs = require('ejs')
const UserController = require('./controllers/userController')
const PORT = process.env.PORT || 5000
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')


app.get('/', UserController.GET)
app.post('/', UserController.POST)

app.listen(PORT, console.log(PORT))

