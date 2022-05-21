const puppeteer = require("puppeteer");


async function scrape(url){
    const browser = await puppeteer.launch({headless:true})
    const page = await browser.newPage()
    await page.goto(url)
    //await page.screenshot({ path: 'example.png' })

    const deals = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('#post-28140 > div > h3')).map(x => x.textContent)
    })

    return deals
    await browser.close()
}

scrape('https://www.doctorofcredit.com/best-current-credit-card-sign-bonuses/')

module.exports = {
    scrape
}
