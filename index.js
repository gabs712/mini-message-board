const path = require('node:path')
const express = require('express')
const indexRouter = require('./routes/index.js')
const newRouter = require('./routes/new.js')

const app = express()

const assetsPath = path.join(__dirname, 'public')
app.use(express.static(assetsPath))

const PORT = 5173
app.listen(PORT)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter)
app.use('/new', newRouter)
