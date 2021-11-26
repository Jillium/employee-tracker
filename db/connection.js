const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your mysql username,
        user: 'root',
        // Your mysql password
        password: 'bnmc7654',
        database: 'employees'
    },
    console.log('Connected to the employees database.')
);

module.exports = db;