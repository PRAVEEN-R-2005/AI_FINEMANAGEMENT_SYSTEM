const express = require("express");

const router = express.Router();

const fineController =
require("../controller/fineController");

const verifyToken =
require("../middleware/authMiddleware");

const authorizeRoles =
require("../middleware/roleMiddleware");

const upload =
require("../middleware/uploadMiddleware");


// =======================
// Add Fine
// Admin Only
// =======================

router.post(

    "/",

    verifyToken,

    authorizeRoles("Admin"),

    fineController.addFine

);


// =======================
// View Fines
// Admin + Faculty
// =======================

router.get(

    "/",

    verifyToken,

    authorizeRoles(

        "Admin",

        "Faculty"

    ),

    fineController.getFines

);

module.exports = router;