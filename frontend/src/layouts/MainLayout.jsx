import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import AppRoutes from "../routes/AppRoutes";

function MainLayout() {

    return (

        <>

            <Sidebar />

            <div className="main-wrapper">

                <Navbar />

                <main className="main-content">

                    <AppRoutes />

                </main>

                <Footer />

            </div>

        </>

    );

}

export default MainLayout;