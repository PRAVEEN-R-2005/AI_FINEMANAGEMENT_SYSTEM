
const Fine = require("../models/Fine");


// ======================================
// ADD FINE
// ======================================


const addFine = (req, res) => {

    console.log("Body:", req.body);

    console.log("File:", req.file);

    const {

        student_id,

        violation_id,

        amount,

        status,

        payment_date

    } = req.body;

    let receipt_file = null;

if (req.file) {

    receipt_file = req.file.filename;

}

    Fine.addFine(

        student_id,

        violation_id,

        amount,

        status,

        payment_date,

        receipt_file,

        (err, result) => {

            if (err) {

                console.log("MYSQL ERROR:");

                console.log(err);

                return res.status(500).json({

                    message: "Error adding fine"

                });

            }

            res.status(201).json({

                message: "Fine added successfully"

            });

        }

    );

};



// ======================================
// GET ALL FINES
// ======================================

const getFines = (req, res) => {

    Fine.getFines(

        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    message: "Error fetching fines"

                });

            }

            console.log("Sending Fines:");

            console.log(result);

            res.status(200).json(result);

        }

    );

};


module.exports = {

    addFine,

    getFines

};
