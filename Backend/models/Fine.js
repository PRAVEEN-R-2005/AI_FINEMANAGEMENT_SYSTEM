
const db = require("../config/db");


// ======================================
// ADD FINE
// ======================================

const addFine = (
    student_id,
    violation_id,
    amount,
    status,
    payment_date,
    receipt_file,
    callback
) => {

    const sql = `
        INSERT INTO fines
        (
            student_id,
            violation_id,
            amount,
            status,
            payment_date,
            receipt_file
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(

    sql,

    [

        student_id,

        violation_id,

        amount,

        status,

        payment_date,

        receipt_file

    ],

    (err, result) => {

        if (err) {

            console.log("MYSQL ERROR:");

            console.log(err);

        }

        callback(err, result);

    }

);

};


// ======================================
// GET ALL FINES
// ======================================

const getFines = (callback) => {

    const sql = `
        SELECT *
        FROM fines
        ORDER BY fine_id DESC
    `;

    db.query(

        sql,

        (err, result) => {

            if (err) {

                console.log("MYSQL ERROR:");

                console.log(err);

            }

            console.log("FINES RESULT:");

            console.log(result);

            callback(err, result);

        }

    );

};


module.exports = {

    addFine,
    getFines

};
