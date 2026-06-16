const Violation = require("../models/Violation");


// ======================
// Add Violation
// ======================

const addViolation = (req, res) => {

    const {

        student_id,

        description,

        category,

        severity,

        fine_amount,

        violation_date

    } = req.body;

    Violation.addViolation(

        student_id,

        description,

        category,

        severity,

        fine_amount,

        violation_date,

        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    message: "Error adding violation"

                });

            }

            res.status(201).json({

                message: "Violation Added Successfully"

            });

        }

    );

};


// ======================
// Get All Violations
// ======================

const getViolations = (req, res) => {

    Violation.getViolations(

        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    message: "Error fetching violations"

                });

            }

            console.log("Sending to Frontend:");

            console.log(result);

            res.status(200).json(result);

        }

    );

};


module.exports = {

    addViolation,

    getViolations

};