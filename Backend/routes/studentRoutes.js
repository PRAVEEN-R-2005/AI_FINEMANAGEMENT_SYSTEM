
const express = require("express");

const router = express.Router();

const studentController =
require("../controller/studentController");

const verifyToken =
require("../middleware/authMiddleware");

const authorizeRoles =
require("../middleware/roleMiddleware");


// Debug

console.log("studentController =", studentController);

console.log("verifyToken =", verifyToken);

console.log("authorizeRoles =", authorizeRoles);


// ======================================
// Add Student
// ======================================

router.post(

    "/",

    verifyToken,

    authorizeRoles("Admin"),

    studentController.addStudent

);


// ======================================
// Get Students
// ======================================

router.get(

    "/",

    verifyToken,

    authorizeRoles(

        "Admin",

        "Faculty"

    ),

    studentController.getStudents

);


module.exports = router;
