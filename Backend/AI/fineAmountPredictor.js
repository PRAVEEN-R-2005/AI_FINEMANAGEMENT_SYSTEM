const predictFineAmount = (severity) => {

    switch (severity) {

        case "Low":

            return 200;

        case "Medium":

            return 500;

        case "High":

            return 2000;

        default:

            return 100;

    }

};

module.exports = predictFineAmount;