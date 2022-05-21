const Deal = require('../db/models/deal');
const express = require('express')
const router = express.Router();
const scrape = require('../cards')
module.exports = router;

router.get('/', async (req, res, next) => {
    try {
        res.send(await Deal.findAll({
            where: {
                origin: 'doctor of credit'
            }
        }))
    }
    catch (e) {
        console.log(e)
        next (e)
    }
})

router.get('/add', async (req, res, next) => {
    try {
        const sales = await scrape.scrape("https://www.doctorofcredit.com/best-current-credit-card-sign-bonuses/")

        for (let i = 0; i < sales.length; i++) {
            await Deal.create({title: sales[i], description: 'default', origin: 'doctor of credit'})
        }
        res.send('succeeded')
    }
    catch (e) {
        console.log(e)
        next(e)
    }
})

