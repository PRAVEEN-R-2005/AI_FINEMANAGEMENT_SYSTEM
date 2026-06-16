const express = require("express");

const router = express.Router();

const dashboardController =
require("../controller/dashboardController");


// Complete Dashboard API
router.get(
    "/",
    dashboardController.getDashboardData
);


// Statistics
router.get(
    "/statistics",
    dashboardController.getStatistics
);


// Monthly Revenue
router.get(
    "/monthly-revenue",
    dashboardController.getMonthlyRevenue
);


// Pie Chart
router.get(
    "/fine-status-chart",
    dashboardController.getFineStatusChart
);


// Bar Chart
router.get(
    "/bar-chart",
    dashboardController.getBarChartData
);


// Line Chart
router.get(
    "/line-chart",
    dashboardController.getLineChartData
);


module.exports = router;