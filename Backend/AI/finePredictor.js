const predictFine = (description) => {

    description = description.toLowerCase();

    // Attendance
    if (description.includes("attendance")) {

        return {
            category: "Attendance"
        };

    }

    // Dress Code
    else if (
        description.includes("dress")
    ) {

        return {
            category: "Dress Code"
        };

    }

    // Library
    else if (
        description.includes("library")
    ) {

        return {
            category: "Library"
        };

    }

    // Laboratory
    else if (
        description.includes("laboratory")
        ||
        description.includes("lab")
    ) {

        return {
            category: "Laboratory"
        };

    }

    // Hostel
    else if (
        description.includes("hostel")
        ||
        description.includes("curfew")
    ) {

        return {
            category: "Hostel"
        };

    }

    // Fee Payment
    else if (
        description.includes("tuition")
        ||
        description.includes("fee")
    ) {

        return {
            category: "Fee Payment"
        };

    }

    else {

        return {
            category: "General"
        };

    }

};

module.exports = predictFine;