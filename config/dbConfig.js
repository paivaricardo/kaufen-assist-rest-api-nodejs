require('dotenv/config');

const developmentCredentials = {
    database: process.env.MYSQL_DB,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
} 

const productionCredentials = {
    database: process.env.MYSQL_DB,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
} 

const credentials = developmentCredentials;

module.exports = {
    DB: credentials.database,
    HOST: credentials.database.host,
    USER: credentials.username,
    PASSWORD: credentials.password,
    dialect: credentials.dialect,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}