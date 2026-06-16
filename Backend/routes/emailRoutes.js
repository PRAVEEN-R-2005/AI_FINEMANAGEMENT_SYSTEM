const express = require("express");

const router = express.Router();

const emailController =
require("../controller/emailController");


// Test Email Route
router.get(

    "/test",

    emailController.sendTestEmail

);


module.exports = router;