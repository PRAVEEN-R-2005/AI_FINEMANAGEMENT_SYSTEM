const Violation =
require("../models/Violation");

const predictFine =
require("../AI/finePredictor");

const predictSeverity =
require("../AI/severityPredictor");

const predictFineAmount =
require("../AI/fineAmountPredictor");


const generateViolation = (req, res) => {

    const {

        student_id,

        description

    } = req.body;

    const result =
    predictFine(description);

    const category =
    result.category;

    const severity =
    predictSeverity(category);

    const fine_amount =
    predictFineAmount(severity);

    const violation_date =
    new Date();

    Violation.addViolation(

        student_id,

        description,

        category,

        severity,

        fine_amount,

        violation_date,

        (err, results) => {

            if (err) {

                return res.status(500).json({

                    message: err.message

                });

            }

            res.status(201).json({

                message:
                "AI violation generated successfully",

                student_id,

                description,

                category,

                severity,

                fine_amount

            });

        }

    );

};

module.exports = {

    generateViolation

};