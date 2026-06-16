const predictFine =
require("../AI/finePredictor");

const predictSeverity =
require("../AI/severityPredictor");

const predictFineAmount =
require("../AI/fineAmountPredictor");

const getPrediction = (req, res) => {

    const { description } = req.body;

    const result = predictFine(description);

    const category = result.category;

    const severity =
    predictSeverity(category);

    const fine_amount =
    predictFineAmount(severity);

    res.status(200).json({

        category,

        severity,

        fine_amount

    });

};

module.exports = {

    getPrediction

};