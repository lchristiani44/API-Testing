// Imports
const express = require('express')
const morgan = require('morgan')

// Creating an Express app
const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())

// Routes
app.use('/api/projects', require('./routes/projects'))
app.use('/api/tasks', require('./routes/tasks'))

// Exports
module.exports = app