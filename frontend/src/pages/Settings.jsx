import {

    FaMoon,
    FaBell,
    FaGlobe,
    FaLock,
    FaSignOutAlt,
    FaTrash

}

from "react-icons/fa";

function Settings() {

    return (

        <div className="container-fluid">

            <h1 className="fw-bold mb-4">

                Settings

            </h1>

            <div className="row">

                {/* Appearance */}

                <div className="col-lg-6 mb-4">

                    <div className="card shadow rounded-4 border-0">

                        <div className="card-body">

                            <h4 className="mb-4">

                                <FaMoon className="me-2 text-primary" />

                                Appearance

                            </h4>

                            <div className="form-check form-switch">

                                <input

                                    className="form-check-input"

                                    type="checkbox"

                                    id="darkMode"

                                />

                                <label

                                    className="form-check-label"

                                    htmlFor="darkMode"

                                >

                                    Enable Dark Mode

                                </label>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Notifications */}

                <div className="col-lg-6 mb-4">

                    <div className="card shadow rounded-4 border-0">

                        <div className="card-body">

                            <h4 className="mb-4">

                                <FaBell className="me-2 text-warning" />

                                Notifications

                            </h4>

                            <div className="form-check form-switch">

                                <input

                                    className="form-check-input"

                                    type="checkbox"

                                    id="notifications"

                                    defaultChecked

                                />

                                <label

                                    className="form-check-label"

                                    htmlFor="notifications"

                                >

                                    Enable Notifications

                                </label>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Language */}

                <div className="col-lg-6 mb-4">

                    <div className="card shadow rounded-4 border-0">

                        <div className="card-body">

                            <h4 className="mb-4">

                                <FaGlobe className="me-2 text-success" />

                                Language

                            </h4>

                            <select

                                className="form-select"

                            >

                                <option>

                                    English

                                </option>

                                <option>

                                    Tamil

                                </option>

                                <option>

                                    Hindi

                                </option>

                            </select>

                        </div>

                    </div>

                </div>

                {/* Security */}

                <div className="col-lg-6 mb-4">

                    <div className="card shadow rounded-4 border-0">

                        <div className="card-body">

                            <h4 className="mb-4">

                                <FaLock className="me-2 text-danger" />

                                Security

                            </h4>

                            <button

                                className="btn btn-warning"

                            >

                                Change Password

                            </button>

                        </div>

                    </div>

                </div>

                {/* Account Actions */}

                <div className="col-12">

                    <div className="card shadow rounded-4 border-0">

                        <div className="card-body">

                            <h4 className="mb-4">

                                Account Actions

                            </h4>

                            <button

                                className="btn btn-danger me-3"

                            >

                                <FaSignOutAlt />

                                {" "}

                                Logout

                            </button>

                            <button

                                className="btn btn-outline-danger"

                            >

                                <FaTrash />

                                {" "}

                                Delete Account

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Settings;