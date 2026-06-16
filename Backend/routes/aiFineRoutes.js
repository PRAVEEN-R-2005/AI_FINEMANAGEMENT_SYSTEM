const express = require("express");

const router = express.Router();

const aiFineController =
require("../controller/aiFineController");

router.post(
    "/generate",
    aiFineController.generateViolation
);

module.exports = router;