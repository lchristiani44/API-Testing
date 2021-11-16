// Imports
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

// Creating express app
const app = express()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/players', require('./routes/index'))

// Server initialization
app.listen(process.env.PORT_NUMBER, () => {
    console.log(`Server listening on PORT ${process.env.PORT_NUMBER}`)
})