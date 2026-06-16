const predictSeverity = (category) => {

    switch (category) {

        case "Attendance":

            return "Medium";

        case "Dress Code":

            return "Low";

        case "Library":

            return "Low";

        case "Laboratory":

            return "High";

        case "Hostel":

            return "Medium";

        case "Fee Payment":

            return "Medium";

        default:

            return "Low";

    }

};

module.exports = predictSeverity;