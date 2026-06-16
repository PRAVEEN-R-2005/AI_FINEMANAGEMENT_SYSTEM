const express = require("express");

const router = express.Router();

const mlController =
require("../controller/mlController");

router.post(
    "/predict",
    mlController.getMLPrediction
);

module.exports = router;