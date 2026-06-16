import {

    FaBell,
    FaMoon,
    FaUserCircle

}

from "react-icons/fa";

function Navbar() {

    return (

        <nav
            className="navbar navbar-light bg-white shadow-sm px-4"
        >

            <h2
                className="fw-bold"
            >

                AI Fine Management System

            </h2>

            <div
                className="d-flex align-items-center gap-4"
            >

                <FaBell
                    size={25}
                    style={{
                        cursor: "pointer"
                    }}
                />

                <FaMoon
                    size={25}
                    style={{
                        cursor: "pointer"
                    }}
                />

                <FaUserCircle
                    size={40}
                    style={{
                        cursor: "pointer"
                    }}
                />

            </div>

        </nav>

    );

}

export default Navbar;