const express = require("express");

const router = express.Router();

const violationController = require("../controller/violationController");


// GET
router.get(

    "/",

    violationController.getViolations

);


// POST
router.post(

    "/",

    violationController.addViolation

);


module.exports = router;