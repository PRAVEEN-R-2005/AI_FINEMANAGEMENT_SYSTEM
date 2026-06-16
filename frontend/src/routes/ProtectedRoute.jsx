import { Navigate } from "react-router-dom";

function ProtectedRoute({

    children

}) {

    // Get token from localStorage

    const token = localStorage.getItem(

        "token"

    );

    // If token doesn't exist

    if (!token) {

        return (

            <Navigate

                to="/"

                replace

            />

        );

    }

    // User authenticated

    return children;

}

export default ProtectedRoute;