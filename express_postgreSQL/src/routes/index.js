// Imports
const { Router } = require('express')
const { getPlayers, getPlayerById, createPlayer, deletePlayer, updatePlayer } = require('../controllers/index.controllers')

// router creation
const router = Router()

// ! CRUD: CREATE (POST), READ (GET), UPDATE (PUT), DELETE
// Defining routes...
router.get('/', getPlayers)
router.get('/:id', getPlayerById)
router.post('/', createPlayer)
router.delete('/:id', deletePlayer)
router.put('/:id', updatePlayer)

// Exports
module.exports = router