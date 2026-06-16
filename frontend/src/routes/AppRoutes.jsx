import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Students from "../pages/Students";
import Violations from "../pages/Violations";
import Fines from "../pages/Fines";
import AIPage from "../pages/AIPage";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "./ProtectedRoute";

function AppRoutes() {

    return (

        <Routes>

            {/* Login */}

            <Route

                path="/"

                element={<Login />}

            />

            {/* Dashboard */}

            <Route

                path="/dashboard"

                element={

                    <ProtectedRoute>

                        <Dashboard />

                    </ProtectedRoute>

                }

            />

            {/* Students */}

            <Route

                path="/students"

                element={

                    <ProtectedRoute>

                        <Students />

                    </ProtectedRoute>

                }

            />

            {/* Violations */}

            <Route

                path="/violations"

                element={

                    <ProtectedRoute>

                        <Violations />

                    </ProtectedRoute>

                }

            />

            {/* Fines */}

            <Route

                path="/fines"

                element={

                    <ProtectedRoute>

                        <Fines />

                    </ProtectedRoute>

                }

            />

            {/* AI */}

            <Route

                path="/ai"

                element={

                    <ProtectedRoute>

                        <AIPage />

                    </ProtectedRoute>

                }

            />

            {/* Profile */}

            <Route

                path="/profile"

                element={

                    <ProtectedRoute>

                        <Profile />

                    </ProtectedRoute>

                }

            />

            {/* Settings */}

            <Route

                path="/settings"

                element={

                    <ProtectedRoute>

                        <Settings />

                    </ProtectedRoute>

                }

            />

            {/* 404 */}

            <Route

                path="*"

                element={<NotFound />}

            />

        </Routes>

    );

}

export default AppRoutes;