import StatCard from "../components/cards/StatCard";

import PieChartCard from "../components/charts/PieChartCard";
import BarChartCard from "../components/charts/BarChartCard";
import LineChartCard from "../components/charts/LineChartCard";

import {

    FaRobot,
    FaExclamationTriangle,
    FaChartLine,
    FaUserGraduate

}

from "react-icons/fa";

function AIPage() {

    // ======================
    // Pie Chart Data
    // ======================

    const pieData = [

        {

            name: "High Risk",

            value: 8

        },

        {

            name: "Medium Risk",

            value: 12

        },

        {

            name: "Low Risk",

            value: 20

        }

    ];


    // ======================
    // Bar Chart Data
    // ======================

    const barData = [

        {

            name: "Jan",

            value: 6

        },

        {

            name: "Feb",

            value: 9

        },

        {

            name: "Mar",

            value: 13

        },

        {

            name: "Apr",

            value: 8

        },

        {

            name: "May",

            value: 15

        }

    ];


    // ======================
    // Line Chart Data
    // ======================

    const lineData = [

        {

            name: "Week 1",

            value: 3

        },

        {

            name: "Week 2",

            value: 5

        },

        {

            name: "Week 3",

            value: 8

        },

        {

            name: "Week 4",

            value: 11

        }

    ];

    return (

        <div className="container-fluid">

            <h1

                className="fw-bold mb-4"

            >

                AI Analytics Dashboard

            </h1>


            {/* Stat Cards */}

            <div className="row g-4">

                <div className="col-md-3">

                    <StatCard

                        title="High Risk Students"

                        value="8"

                        icon={<FaExclamationTriangle />}

                        color="linear-gradient(135deg,#EF4444,#DC2626)"

                    />

                </div>

                <div className="col-md-3">

                    <StatCard

                        title="Prediction Accuracy"

                        value="92%"

                        icon={<FaRobot />}

                        color="linear-gradient(135deg,#8B5CF6,#7C3AED)"

                    />

                </div>

                <div className="col-md-3">

                    <StatCard

                        title="AI Alerts"

                        value="15"

                        icon={<FaChartLine />}

                        color="linear-gradient(135deg,#F59E0B,#D97706)"

                    />

                </div>

                <div className="col-md-3">

                    <StatCard

                        title="Students Analysed"

                        value="40"

                        icon={<FaUserGraduate />}

                        color="linear-gradient(135deg,#3B82F6,#2563EB)"

                    />

                </div>

            </div>


            {/* Charts */}

            <div className="row mt-5 g-4">

                <div className="col-lg-4">

                    <PieChartCard

                        title="Risk Distribution"

                        data={pieData}

                    />

                </div>

                <div className="col-lg-4">

                    <BarChartCard

                        title="Monthly AI Alerts"

                        data={barData}

                    />

                </div>

                <div className="col-lg-4">

                    <LineChartCard

                        title="Prediction Trend"

                        data={lineData}

                    />

                </div>

            </div>


            {/* Recommendation Panel */}

            <div className="card shadow mt-5 p-4 rounded-4">

                <h3 className="mb-4">

                    AI Recommendations

                </h3>

                <ul className="list-group">

                    <li className="list-group-item">

                        ⚠ Student ID 5 is classified as High Risk.

                    </li>

                    <li className="list-group-item">

                        📈 Hostel violations increased by 15%.

                    </li>

                    <li className="list-group-item">

                        💰 Pending fines are higher this month.

                    </li>

                    <li className="list-group-item">

                        🤖 AI prediction accuracy reached 92%.

                    </li>

                </ul>

            </div>

        </div>

    );

}

export default AIPage;