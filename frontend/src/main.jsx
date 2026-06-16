import React from "react";

import ReactDOM from "react-dom/client";

import {

    BrowserRouter

}

from "react-router-dom";

import App from "./App";


// Bootstrap

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min.js";


// Global CSS

import "./index.css";

import "./styles/card.css";

import "./styles/dashboard.css";

import "./styles/login.css";

import "./styles/navbar.css";

import "./styles/sidebar.css";

import "./styles/table.css";


// Context Providers

import AuthProvider from "./contexts/AuthContext";

import ThemeProvider from "./contexts/ThemeContext";


ReactDOM.createRoot(

    document.getElementById(

        "root"

    )

).render(

    <React.StrictMode>

        <BrowserRouter>

            <AuthProvider>

                <ThemeProvider>

                    <App />

                </ThemeProvider>

            </AuthProvider>

        </BrowserRouter>

    </React.StrictMode>

);