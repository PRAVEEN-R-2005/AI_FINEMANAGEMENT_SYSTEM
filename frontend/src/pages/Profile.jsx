import {

    FaUserCircle,
    FaEnvelope,
    FaUserTag,
    FaBuilding,
    FaPhone,
    FaEdit,
    FaLock

}

from "react-icons/fa";

function Profile() {

    // Temporary User Data
    // Later fetch from backend

    const user = {

        username: "Praveen R",

        email: "admin@gmail.com",

        role: "Admin",

        department: "Information Technology",

        phone: "+91 9876543210",

        status: "Active"

    };

    return (

        <div className="container-fluid">

            <h1

                className="fw-bold mb-4"

            >

                My Profile

            </h1>

            <div className="row">

                <div className="col-lg-4">

                    <div className="card shadow rounded-4 border-0">

                        <div className="card-body text-center">

                            <FaUserCircle

                                size={150}

                                color="#3B82F6"

                            />

                            <h3

                                className="mt-3"

                            >

                                {

                                    user.username

                                }

                            </h3>

                            <span

                                className="badge bg-success"

                            >

                                {

                                    user.status

                                }

                            </span>

                        </div>

                    </div>

                </div>

                <div className="col-lg-8">

                    <div className="card shadow rounded-4 border-0">

                        <div className="card-body">

                            <h3

                                className="mb-4"

                            >

                                Profile Information

                            </h3>

                            <div className="mb-4">

                                <FaEnvelope

                                    className="me-3 text-primary"

                                />

                                <strong>

                                    Email :

                                </strong>

                                {" "}

                                {

                                    user.email

                                }

                            </div>

                            <div className="mb-4">

                                <FaUserTag

                                    className="me-3 text-success"

                                />

                                <strong>

                                    Role :

                                </strong>

                                {" "}

                                {

                                    user.role

                                }

                            </div>

                            <div className="mb-4">

                                <FaBuilding

                                    className="me-3 text-warning"

                                />

                                <strong>

                                    Department :

                                </strong>

                                {" "}

                                {

                                    user.department

                                }

                            </div>

                            <div className="mb-4">

                                <FaPhone

                                    className="me-3 text-danger"

                                />

                                <strong>

                                    Phone :

                                </strong>

                                {" "}

                                {

                                    user.phone

                                }

                            </div>

                            <hr />

                            <button

                                className="btn btn-primary me-3"

                            >

                                <FaEdit />

                                {" "}

                                Edit Profile

                            </button>

                            <button

                                className="btn btn-warning"

                            >

                                <FaLock />

                                {" "}

                                Change Password

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Profile;