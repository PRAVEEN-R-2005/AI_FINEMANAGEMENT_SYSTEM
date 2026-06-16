const sendEmail =
require("../services/emailService");


const sendTestEmail = async (

    req,
    res

) => {

    try {

        await sendEmail(

            "student@gmail.com",

            "Fine Notification",

            `Dear Student,

Your fine amount is ₹500.

Status : Pending.

Thank You.`

        );

        res.status(200).json({

            message: "Dummy Email Sent Successfully"

        });

    }

    catch (err) {

        res.status(500).json({

            message: err.message

        });

    }

};


module.exports = {

    sendTestEmail

};