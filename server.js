const mysql = require('mysql2');
const express = require('express');

const PORT = process.env.PORT || 3011;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
// // view all departmetns
// db.query(`SELECT * FROM department`, (err, rows) => {
//     console.log(rows);
// });

// // Add a department
// const sql = `INSERT INTO department (department_name)
//                 Values (?)`;
// const params = ['Marketing'];

// db.query(sql, params, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// })

// db.query(`SELECT * FROM employeerole`, (err, rows) => {
//     console.log(rows);
// })

// responde for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});