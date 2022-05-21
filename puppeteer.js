const puppeteer = require("puppeteer");


async function scrape(url){
    const browser = await puppeteer.launch({headless:true})
    const page = await browser.newPage()
    await page.goto(url)

    const deals = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('div.entry.unvoted > div > p.title > a')).map(x => x.textContent)
    })

    return deals
    await browser.close()
} 

// (async () => {
//     const browser = await puppeteer.launch({headless:false})
//     const page = await browser.newPage()
//     await page.goto("https://old.reddit.com/r/frugalmalefashion/rising/")


//     const [el] = await page.$x('/html/body/div[4]/div/div[5]/div[2]/div/p[1]/a')
//     const text = await el.getProperty('textContent')
//     const name = await text.jsonValue()

//     console.log(name)
//     await browser.close()
// })();

scrape("https://old.reddit.com/r/frugalmalefashion/rising/")

module.exports = {
    scrape
}