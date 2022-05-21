const router = require('express').Router()

router.use('/deals', require('./deals'))
router.use('/cards', require('./cards'))

module.exports = router