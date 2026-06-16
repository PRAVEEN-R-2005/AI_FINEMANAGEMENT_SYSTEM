import {

    FaHome,
    FaUserGraduate,
    FaExclamationTriangle,
    FaMoneyBillWave,
    FaRobot,
    FaSignOutAlt

}

from "react-icons/fa";

import {

    NavLink,

    useNavigate

}

from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.removeItem(

            "token"

        );

        navigate("/");

    };

    return (

        <div

            className="bg-dark text-white"

            style={{

                width: "250px",

                minHeight: "100vh"

            }}

        >

            <div className="p-4">

                <h2 className="fw-bold">

                    AI Fine Management

                </h2>

                <hr />

                <ul className="nav flex-column">

                    <li className="nav-item mb-3">

                        <NavLink

                            to="/dashboard"

                            className="nav-link text-white"

                        >

                            <FaHome />

                            {" "}Dashboard

                        </NavLink>

                    </li>

                    <li className="nav-item mb-3">

                        <NavLink

                            to="/students"

                            className="nav-link text-white"

                        >

                            <FaUserGraduate />

                            {" "}Students

                        </NavLink>

                    </li>

                    <li className="nav-item mb-3">

                        <NavLink

                            to="/violations"

                            className="nav-link text-white"

                        >

                            <FaExclamationTriangle />

                            {" "}Violations

                        </NavLink>

                    </li>

                    <li className="nav-item mb-3">

                        <NavLink

                            to="/fines"

                            className="nav-link text-white"

                        >

                            <FaMoneyBillWave />

                            {" "}Fines

                        </NavLink>

                    </li>

                    <li className="nav-item mb-3">

                        <NavLink

                            to="/ai"

                            className="nav-link text-white"

                        >

                            <FaRobot />

                            {" "}AI Prediction

                        </NavLink>

                    </li>

                </ul>

                <button

                    className="btn btn-danger w-100 mt-4"

                    onClick={handleLogout}

                >

                    <FaSignOutAlt />

                    {" "}Logout

                </button>

            </div>

        </div>

    );

}

export default Sidebar;