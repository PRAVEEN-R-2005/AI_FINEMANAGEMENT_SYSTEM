import {

    Routes,
    Route

}

from "react-router-dom";

import Login from "../pages/Login";

import MainLayout from "../layouts/MainLayout";

function MainRoutes() {

    const token = localStorage.getItem("token");

    return (

        <Routes>

            {/* Login Page */}

            <Route

                path="/"

                element={<Login />}

            />

            {/* Protected Pages */}

            <Route

                path="/*"

                element={

                    token

                        ?

                        <MainLayout />

                        :

                        <Login />

                }

            />

        </Routes>

    );

}

export default MainRoutes;