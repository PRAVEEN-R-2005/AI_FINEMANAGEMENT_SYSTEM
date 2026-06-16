const db = require("../config/db");


// ======================
// Add Violation
// ======================

const addViolation = (

    student_id,

    description,

    category,

    severity,

    fine_amount,

    violation_date,

    callback

) => {

    const sql = `
        INSERT INTO violations
        (
            student_id,
            description,
            category,
            severity,
            fine_amount,
            violation_date
        )
        VALUES (?,?,?,?,?,?)
    `;

    db.query(

        sql,

        [

            student_id,

            description,

            category,

            severity,

            fine_amount,

            violation_date

        ],

        callback

    );

};


// ======================
// Get All Violations
// ======================

const getViolations = (callback) => {

    const sql = `
        SELECT *
        FROM violations
        ORDER BY violation_id DESC
    `;

    db.query(

        sql,

        (err, result) => {

            if (err) {

                console.log("MYSQL ERROR:");

                console.log(err);

            }

            console.log("Violations Result:");

            console.log(result);

            callback(err, result);

        }

    );

};


module.exports = {

    addViolation,

    getViolations

};