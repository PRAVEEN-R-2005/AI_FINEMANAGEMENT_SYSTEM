
const Student = require("../models/Student");


// ===================================
// Add Student
// ===================================

const addStudent = (req, res) => {

    const {

        name,

        department,

        email

    } = req.body;

    Student.addStudent(

        name,

        department,

        email,

        (err, result) => {

            if (err) {

                console.log(

                    "Add Student Error:",

                    err

                );

                return res.status(500).json({

                    message:

                        "Error adding student"

                });

            }

            res.status(201).json({

                message:

                    "Student added successfully"

            });

        }

    );

};


// ===================================
// Get Students
// ===================================

const getStudents = (req, res) => {

    console.log("Inside getStudents");

    Student.getStudents(

        (err, result) => {

            if (err) {

                console.log("MYSQL ERROR:");

                console.log(err);

                return res.status(500).json({

                    message: "Error fetching students"

                });

            }

            console.log(result);

            res.status(200).json(result);

        }

    );

};


module.exports = {

    addStudent,

    getStudents

};
