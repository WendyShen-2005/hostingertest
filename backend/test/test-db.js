const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

async function testConnection() {
    try {
        console.log("Connecting to postgres on hostinger...");
        await client.connect();
        const res = await client.query('SELECT * FROM pages;');
        console.log(' Connection successful!')
        console.log('server time: ', res);
    } catch (err) {
        console.error(' conn error: ', err.message);
    } finally {
        await client.end()
    }
}

testConnection();