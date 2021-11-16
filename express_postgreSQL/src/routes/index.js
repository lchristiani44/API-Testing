// Imports
const { Router } = require('express')
const { getUsers } = require('../controllers/index.controllers')

// router creation
const router = Router()

// Defining routes...
router.get('/', getUsers)

module.exports = router