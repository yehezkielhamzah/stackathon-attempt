const router = require('express').Router()

router.use('/deals', require('./deals'))

module.exports = router