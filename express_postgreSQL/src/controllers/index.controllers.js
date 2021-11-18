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
// Retrive all players
const getPlayers = async (req, res) => {
    const result = await pool.query('SELECT * FROM players') // Async query
    // console.log(result)
    res.json(result.rows)
}

// Retrive one particular player: player ID via req.params
const getPlayerById = async (req, res) => {
    const id = parseInt(req.params.id)
    // console.log(typeof id, id) // Compruebo que el id sea del tipo `number`
    const result = await pool.query(`SELECT * FROM players WHERE id = ${id}`)
    // console.log(result)
    res.json(result.rows)
}

// Add one player
// const createPlayer = async (req, res) => { // Adding players to the database via req.body
//     const { name, team } = req.body
//     const result = await pool.query(`INSERT INTO players (name, team) VALUES ('${name}', '${team}')`)
//     console.log(result)
//     res.json({
//         "Message": "New player created",
//         "body": { name, team }
//     })
// } Timberwolves

// Add one player (Fazt)
const createPlayer = async (req, res) => { // Adding players to the database via req.body
    const { name, team } = req.body
    const result = await pool.query('INSERT INTO players (name, team) VALUES ($1, $2)', [name, team])
    console.log(result)
    res.json({
        "Message": "New player created",
        "body": { name, team }
    })
}

// Delete player by ID (ID via req.params as `string`)
const deletePlayer = async (req, res) => {
    const id = parseInt(req.params.id)
    const result = await pool.query(`DELETE FROM players WHERE id = ${id}`)
    console.log(result)
    res.json({"Message": `Player with ID ${id} was deleted successfully.`})
}

// Update player by ID (ID via req.params | data via req.body)
const updatePlayer = async (req, res) => {
    const id = parseInt(req.params.id)
    // console.log(req.body)
    const { name, team } = req.body
    const result = await pool.query(
        `UPDATE players
        SET name = '${name}', team = '${team}'
        WHERE id = ${id}`
    )
    console.log(result)
    res.json({
        "Message": `Player with ID ${id} was updated successfully.`,
        "body": {
            name,
            team
        }
    })
}

module.exports = {
    getPlayers,
    getPlayerById,
    createPlayer,
    deletePlayer,
    updatePlayer
}