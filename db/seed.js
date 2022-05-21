const { db } = require('./db')
const Deal = require('./models/deal')

const seed = async () => {
    try {
        //console.log('seed test')
        await db.sync({force:true})
        const nike = await Deal.create({title: 'Nike on Sale for $5', description: 'use code STACKATHON'})
        const adidas = await Deal.create({title: 'Adidas on Sale for $5', description: 'use code STACKATHON'})
    }
    catch (e) {
        console.log(e)
    }
}

module.exports = seed