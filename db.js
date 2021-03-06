require(`dotenv`).config()
const mysql = require(`mysql`)

const configure = {
    host : process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
}

exports.pool = mysql.createPool(configure)

