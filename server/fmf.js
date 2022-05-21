const express = require('express')
const router = express.Router()
module.exports = router
const scrape = require('../puppeteer')

router.get('/sale', async (req,res) => {
    try {
        const response = await scrape.scrape("https://old.reddit.com/r/frugalmalefashion/rising/")
        //res.send(await scrape.scrape("https://old.reddit.com/r/frugalmalefashion/rising/"))
        res.send(response)
    }
    catch (e) {
        console.log(e)
    }
})