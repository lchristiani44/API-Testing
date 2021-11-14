require('dotenv').config()
const express = require('express')
const morgan = require('morgan') // middleware que se encarga de imprimir en consola las peticiones que llegan al servidor
const app = express()

// Settings
// app.set('json spaces', 2) // No need for this with the json formatter extension

// Middlewares
app.use(morgan('dev')) // 'dev' for development
// app.use(morgan('combined')) // for more information
app.use(express.json())
// app.use(express.urlencoded({ extended: false })) // para poder leer datos enviados desde archivos .html, .css, etc. Ej: datos enviados a traves de un formulario HTML | extended: false para manejo de datos simples

// Routes
// ! app.use('*defino la ruta aca, por eso en el router de index o movies solo aparece '/'*', require(...))
app.use('/api/', require('./routes/index'))
app.use('/api/movies', require('./routes/movies'))

// Launching the server
app.listen(process.env.PORT_NUMBER, () => {
    console.log(`Server listening on PORT ${process.env.PORT_NUMBER}...`)
})