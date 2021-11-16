// Whole-script strict mode syntax
'use strict';

// Imports
const app = require('./app')
require('dotenv').config()

// Server functionality
const server = async () => {
    await app.listen(process.env.PORT_NUMBER)
    console.log(`Server listening on PORT ${process.env.PORT_NUMBER}`)
}

// Server initialization
server()