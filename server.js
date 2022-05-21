const port = process.env.PORT || 3000;
const app = require('./server/app')
const seed = require('./db/seed')
//const { Sequelize, DataTypes } = require('sequelize')
//const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/stackathon')

app.listen(port, ()=> console.log(`listening on port ${port}`));

seed()
//module.exports = { db, DataTypes}