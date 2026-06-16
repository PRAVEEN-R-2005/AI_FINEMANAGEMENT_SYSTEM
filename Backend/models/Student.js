const db = require("../config/db");


// ===========================
// Add Student
// ===========================

const addStudent = (

    name,

    department,

    email,

    callback

) => {

    const sql = `

        INSERT INTO students

        (

            name,

            department,

            email

        )

        VALUES (?, ?, ?)

    `;

    db.query(

        sql,

        [

            name,

            department,

            email

        ],

        callback

    );

};


// ===========================
// Get Students
// ===========================

const getStudents = (

    callback

) => {

    const sql = "SELECT * FROM students";

    db.query(

        sql,

        callback

    );

};


module.exports = {

    addStudent,

    getStudents

};