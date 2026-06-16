const Dashboard = require("../models/Dashboard");


// ======================
// Statistics
// ======================
const getStatistics = (req, res) => {

    Dashboard.getStatistics((err, results) => {

        if (err) {

            return res.status(500).json({
                message: err.message
            });

        }

        res.status(200).json(results[0]);

    });

};


// ======================
// Monthly Revenue
// ======================
const getMonthlyRevenue = (req, res) => {

    Dashboard.getMonthlyRevenue((err, results) => {

        if (err) {

            return res.status(500).json({
                message: err.message
            });

        }

        res.status(200).json(results);

    });

};


// ======================
// Pie Chart
// ======================
const getFineStatusChart = (req, res) => {

    Dashboard.getFineStatusChart((err, results) => {

        if (err) {

            return res.status(500).json({
                message: err.message
            });

        }

        res.status(200).json(results);

    });

};
// =====================
// Bar Chart
// =====================
const getBarChartData = (req, res) => {

    Dashboard.getBarChartData(

        (err, results) => {

            if (err) {

                return res.status(500).json({
                    message: err.message
                });

            }

            res.status(200).json(results);

        }

    );

};
// =====================
// Line Chart
// =====================
const getLineChartData = (req, res) => {

    Dashboard.getLineChartData(

        (err, results) => {

            if (err) {

                return res.status(500).json({
                    message: err.message
                });

            }

            res.status(200).json(results);

        }

    );

};
// ======================
// Complete Dashboard
// ======================
const getDashboardData = (req, res) => {

    Dashboard.getDashboardData(

        (err, results) => {

            if (err) {

                return res.status(500).json({

                    message: err.message

                });

            }

            res.status(200).json(results);

        }

    );

};


// ======================
// Export
// ======================
module.exports = {

    getStatistics,
    getMonthlyRevenue,
    getFineStatusChart,
     getBarChartData,
     getLineChartData,
      getDashboardData
};