const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:password@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db
    .sync() 
    // ({force: false}) //don't drop tables
    .then(() => {
        console.log('DB connected')
    })

module.exports = db