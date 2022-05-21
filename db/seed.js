const { db } = require('./db')
const Deal = require('./models/deal')

const seed = async () => {
    try {
        await db.sync({force:false})
        const nike = await Deal.create({title: 'Nike on Sale for $5', description: 'use code STACKATHON'})
        const adidas = await Deal.create({title: 'Adidas on Sale for $5', description: 'use code STACKATHON'})
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = seed