// Format Date

const formatDate = (

    date

) => {

    return new Date(

        date

    ).toLocaleDateString(

        "en-IN",

        {

            year: "numeric",

            month: "short",

            day: "numeric"

        }

    );

};

export default formatDate;