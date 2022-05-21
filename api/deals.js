const Deal = require('../db/models/deal');
const express = require('express')
const router = express.Router();
const scrape = require('../puppeteer')
module.exports = router;

//router.use('/api', require('./deals'))

router.get('/', async (req, res, next) => {
    try {
        res.send(await Deal.findAll())
    }
    catch (e) {
        console.log(e)
        next (e)
    }
})

router.get('/add', async (req, res, next) => {
    try {
        const sales = await scrape.scrape("https://old.reddit.com/r/frugalmalefashion/rising/")

        for (let i = 0; i < sales.length; i++) {
            await Deal.create({title: sales[i], description: 'use code STACKATHON', origin: 'fmf'})
        }
        res.send('succeeded')
    }
    catch (e) {
        console.log(e)
        next(e)
    }
})

