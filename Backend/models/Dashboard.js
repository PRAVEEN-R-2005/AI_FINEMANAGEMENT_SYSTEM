const db = require("../config/db");

// ======================
// Statistics
// ======================
const getStatistics = (callback) => {

    const sql = `
        SELECT
            (SELECT COUNT(*) FROM students) AS total_students,
            (SELECT COUNT(*) FROM violations) AS total_violations,
            (SELECT COUNT(*) FROM fines) AS total_fines,
            (SELECT COUNT(*) FROM fines WHERE status='Paid') AS paid_fines,
            (SELECT COUNT(*) FROM fines WHERE status='Pending') AS pending_fines
    `;

    db.query(sql, callback);

};


// ======================
// Monthly Revenue
// ======================
const getMonthlyRevenue = (callback) => {

    const sql = `
        SELECT
            MONTH(payment_date) AS month_number,
            MONTHNAME(payment_date) AS month,
            SUM(amount) AS revenue
        FROM fines
        WHERE status='Paid'
        GROUP BY
            MONTH(payment_date),
            MONTHNAME(payment_date)
        ORDER BY MONTH(payment_date)
    `;

    db.query(sql, callback);

};


// ======================
// Pie Chart
// ======================
const getFineStatusChart = (callback) => {

    const sql = `
        SELECT
            status,
            COUNT(*) AS count
        FROM fines
        GROUP BY status
    `;

    db.query(sql, callback);

};
// =====================
// Bar Chart
// =====================
const getBarChartData = (callback) => {

    const sql = `
        SELECT
            MONTH(payment_date) AS month_number,
            MONTHNAME(payment_date) AS month,
            SUM(amount) AS revenue
        FROM fines
        WHERE status = 'Paid'
        GROUP BY
            MONTH(payment_date),
            MONTHNAME(payment_date)
        ORDER BY
            MONTH(payment_date)
    `;

    db.query(sql, callback);

};
// =====================
// Line Chart
// =====================
const getLineChartData = (callback) => {

    const sql = `
        SELECT
            MONTH(payment_date) AS month_number,
            MONTHNAME(payment_date) AS month,
            SUM(amount) AS revenue
        FROM fines
        WHERE status='Paid'
        GROUP BY
            MONTH(payment_date),
            MONTHNAME(payment_date)
        ORDER BY
            MONTH(payment_date)
    `;

    db.query(sql, callback);

};
// ======================
// Complete Dashboard
// ======================
const getDashboardData = (callback) => {

    const dashboard = {};

    getStatistics((err, statistics) => {

        if (err) return callback(err);

        dashboard.statistics = statistics[0];

        getMonthlyRevenue((err, revenue) => {

            if (err) return callback(err);

            dashboard.monthly_revenue = revenue;

            getFineStatusChart((err, chart) => {

                if (err) return callback(err);

                dashboard.fine_status_chart = chart;

                getBarChartData((err, barChart) => {

                    if (err) return callback(err);

                    dashboard.bar_chart = barChart;

                    getLineChartData((err, lineChart) => {

                        if (err) return callback(err);

                        dashboard.line_chart = lineChart;

                        callback(null, dashboard);

                    });

                });

            });

        });

    });

};

// ======================
// Export
// ======================
module.exports = {

    getStatistics,
    getMonthlyRevenue,
    getFineStatusChart,
    getBarChartData,
     getLineChartData, getDashboardData

};