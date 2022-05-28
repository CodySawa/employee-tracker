const mysql = require('mysql2');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: 'business'
    },
    console.log('Connected to the election database.')
);

module.exports = connection;