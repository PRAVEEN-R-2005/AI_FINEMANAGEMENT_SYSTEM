import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

function NotFound() {

    return (

        <div
            className="container d-flex justify-content-center align-items-center"
            style={{
                minHeight: "100vh"
            }}
        >

            <div
                className="card shadow-lg border-0 rounded-4 p-5 text-center"
                style={{
                    maxWidth: "600px"
                }}
            >

                <FaExclamationTriangle
                    size={80}
                    color="#dc3545"
                    className="mb-4"
                />

                <h1
                    className="display-1 fw-bold text-danger"
                >

                    404

                </h1>

                <h3
                    className="mb-3"
                >

                    Page Not Found

                </h3>

                <p
                    className="text-muted mb-4"
                >

                    Sorry, the page you are looking for does not exist
                    or has been moved.

                </p>

                <Link
                    to="/dashboard"
                    className="btn btn-primary px-4"
                >

                    <FaHome className="me-2" />

                    Back to Dashboard

                </Link>

            </div>

        </div>

    );

}

export default NotFound;