const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.json({"Home": "Welcome!"})
})

module.exports = router