
const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

db.getConnection((err, connection) => {
    if (err) {
        console.log("MySQL Connection Failed:", err.message || err);
        return;
    }

    console.log("MySQL Connected Successfully");

    const createStudentsTable = `
        CREATE TABLE IF NOT EXISTS students (
            student_id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            department VARCHAR(255),
            email VARCHAR(255)
        )
    `;

    connection.query(createStudentsTable, (tableErr) => {
        if (tableErr) {
            console.log("Failed to ensure students table exists:", tableErr.message || tableErr);
        } else {
            console.log("Students table is ready");
        }
        connection.release();
    });
});

module.exports = db;