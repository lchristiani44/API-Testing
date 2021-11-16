// Imports
const { Pool } = require('pg')
require('dotenv').config()

// Setting connection to database
const pool = new Pool({
    host: process.env.HOST,
    user: process.env.POSTGRESQL_USERNAME,
    password: process.env.POSTGRESQL_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
})

// Routes functionalities
const getUsers = async (req, res) => {
    const result = await pool.query('SELECT * FROM players') // Async query
    // console.log(result)
    res.json(result.rows)
}

module.exports = {
    getUsers
}