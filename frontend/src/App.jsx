import { useLocation } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Sidebar from "./components/common/Sidebar";
import Footer from "./components/common/Footer";

import AppRoutes from "./routes/AppRoutes";

function App() {

    const location = useLocation();

    // Login page
    const isLoginPage = location.pathname === "/";

    return (

        <>

            {

                !isLoginPage &&

                <Navbar />

            }

            <div className="app-container">

                {

                    !isLoginPage &&

                    <Sidebar />

                }

                <div

                    className={

                        isLoginPage

                            ?

                            "login-container"

                            :

                            "main-content"

                    }

                >

                    <AppRoutes />

                </div>

            </div>

            {

                !isLoginPage &&

                <Footer />

            }

        </>

    );

}

export default App;