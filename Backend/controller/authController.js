const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// =======================
// REGISTER
// =======================
const registerUser = async (req, res) => {

    try {

        const { username, email, password, role } = req.body;

        const hashedPassword =
        await bcrypt.hash(password, 10);

        User.registerUser(

            {

                username,

                email,

                password: hashedPassword,

                role

            },

            (err, result) => {

                if (err) {

                    console.log(err);

                    return res.status(500).json({

                        message:
                        "Registration Failed"

                    });

                }

                res.status(201).json({

                    message:
                    "User Registered Successfully"

                });

            }

        );

    }

    catch (error) {

        console.log(error);

        res.status(500).json({

            message:
            error.message

        });

    }

};


// =======================
// LOGIN
// =======================
const loginUser = (req, res) => {

    const { email, password } = req.body;

    User.findUserByEmail(

        email,

        async (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({

                    message:
                    "Server Error"

                });

            }

            if (result.length === 0) {

                return res.status(404).json({

                    message:
                    "User Not Found"

                });

            }

            const user = result[0];

            console.log(
                "User Found :",
                user
            );

            const isMatch =
            await bcrypt.compare(

                password,

                user.password

            );

            if (!isMatch) {

                return res.status(401).json({

                    message:
                    "Invalid Password"

                });

            }

            const token = jwt.sign(

                {

                    id: user.user_id,

                    email: user.email,

                    role: user.role

                },

                "mysecretkey",

                {

                    expiresIn: "1h"

                }

            );

            console.log(

                "Generated Token"

            );

            res.status(200).json({

                message:
                "Login Successful",

                token,

                role: user.role

            });

        }

    );

};

module.exports = {

    registerUser,

    loginUser

};