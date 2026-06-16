import StatCard from "../components/cards/StatCard";

import PieChartCard from "../components/charts/PieChartCard";
import BarChartCard from "../components/charts/BarChartCard";
import LineChartCard from "../components/charts/LineChartCard";

import {

    FaUserGraduate,
    FaExclamationTriangle,
    FaMoneyBillWave,
    FaCheckCircle,
    FaClock

}

from "react-icons/fa";

function Dashboard() {

    // ======================
    // Pie Chart Data
    // ======================

    const pieData = [

        {

            name: "Discipline",

            value: 6

        },

        {

            name: "Attendance",

            value: 4

        },

        {

            name: "Library",

            value: 2

        },

        {

            name: "Hostel",

            value: 1

        }

    ];


    // ======================
    // Bar Chart Data
    // ======================

    const barData = [

        {

            name: "Jan",

            value: 500

        },

        {

            name: "Feb",

            value: 1200

        },

        {

            name: "Mar",

            value: 2300

        },

        {

            name: "Apr",

            value: 1700

        },

        {

            name: "May",

            value: 2800

        }

    ];


    // ======================
    // Line Chart Data
    // ======================

    const lineData = [

        {

            name: "Jan",

            value: 2

        },

        {

            name: "Feb",

            value: 4

        },

        {

            name: "Mar",

            value: 8

        },

        {

            name: "Apr",

            value: 10

        },

        {

            name: "May",

            value: 13

        }

    ];


    return (

        <div className="container-fluid">

            {/* ======================
                Heading
            ====================== */}

            <h1 className="fw-bold mb-4">

                Dashboard

            </h1>


            {/* ======================
                Stat Cards
            ====================== */}

            <div className="row g-4">

                <div className="col-md-4">

                    <StatCard

                        title="Total Students"

                        value="14"

                        icon={<FaUserGraduate />}

                        color="linear-gradient(135deg,#3B82F6,#2563EB)"

                    />

                </div>


                <div className="col-md-4">

                    <StatCard

                        title="Total Violations"

                        value="13"

                        icon={<FaExclamationTriangle />}

                        color="linear-gradient(135deg,#F59E0B,#D97706)"

                    />

                </div>


                <div className="col-md-4">

                    <StatCard

                        title="Total Fines"

                        value="₹4300"

                        icon={<FaMoneyBillWave />}

                        color="linear-gradient(135deg,#EF4444,#DC2626)"

                    />

                </div>


                <div className="col-md-6">

                    <StatCard

                        title="Paid Fines"

                        value="₹2300"

                        icon={<FaCheckCircle />}

                        color="linear-gradient(135deg,#10B981,#059669)"

                    />

                </div>


                <div className="col-md-6">

                    <StatCard

                        title="Pending Fines"

                        value="₹2000"

                        icon={<FaClock />}

                        color="linear-gradient(135deg,#8B5CF6,#7C3AED)"

                    />

                </div>

            </div>


            {/* ======================
                Charts
            ====================== */}

            <div className="row mt-5 g-4">

                <div className="col-lg-4">

                    <PieChartCard

                        title="Violation Categories"

                        data={pieData}

                    />

                </div>


                <div className="col-lg-4">

                    <BarChartCard

                        title="Monthly Fine Collection"

                        data={barData}

                    />

                </div>


                <div className="col-lg-4">

                    <LineChartCard

                        title="Violation Trend"

                        data={lineData}

                    />

                </div>

            </div>

        </div>

    );

}

export default Dashboard;