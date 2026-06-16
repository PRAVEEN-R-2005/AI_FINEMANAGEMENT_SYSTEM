const { PythonShell } = require("python-shell");

const predictSeverity =
require("../AI/severityPredictor");

const predictFineAmount =
require("../AI/fineAmountPredictor");

const getMLPrediction = async (req, res) => {

    const { description } = req.body;

    const options = {

        args: [description]

    };

    PythonShell.run(

        "./ML/predict.py",

        options

    )

    .then(result => {

        const category = result[0];

        const severity =
        predictSeverity(category);

        const fine_amount =
        predictFineAmount(severity);

        res.status(200).json({

            category,

            severity,

            fine_amount

        });

    })

    .catch(err => {

        res.status(500).json({

            message: err.message

        });

    });

};

module.exports = {

    getMLPrediction

};