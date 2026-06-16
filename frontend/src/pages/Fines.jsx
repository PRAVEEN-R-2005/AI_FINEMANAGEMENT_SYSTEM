import { useEffect, useState } from "react";

import api from "../services/api";

import FineForm from "../components/forms/FineForm";

import FineTable from "../components/tables/FineTable";

import SearchBar from "../components/common/SearchBar";

import LoadingSpinner from "../components/common/LoadingSpinner";

function Fines() {

    // ======================
    // State
    // ======================

    const [fines, setFines] = useState([]);

    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    const [formData, setFormData] = useState({

        student_id: "",

        violation_id: "",

        amount: "",

        status: "Pending",

        payment_date: ""

    });

    // ======================
    // Fetch Fines
    // ======================

    useEffect(() => {

        fetchFines();

    }, []);

    const fetchFines = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get(

                "/fines",

                {

                    headers: {

                        Authorization:

                            `Bearer ${token}`

                    }

                }

            );

            setFines(

                response.data

            );

        }

        catch (err) {

            console.log(

                "Error fetching fines:",

                err

            );

        }

        finally {

            setLoading(false);

        }

    };


    // ======================
    // Add Fine
    // ======================

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await api.post(

                "/fines",

                formData,

                {

                    headers: {

                        Authorization:

                            `Bearer ${token}`

                    }

                }

            );

            fetchFines();

            setFormData({

                student_id: "",

                violation_id: "",

                amount: "",

                status: "Pending",

                payment_date: ""

            });

        }

        catch (err) {

            console.log(

                "Error adding fine:",

                err

            );

        }

    };


    // ======================
    // Search
    // ======================

    const filteredFines = fines.filter(

        (fine) =>

            fine.student_id

                ?.toString()

                .includes(

                    searchTerm

                )

    );


    // ======================
    // Loading Spinner
    // ======================

    if (loading) {

        return <LoadingSpinner />;

    }


    return (

        <div className="container-fluid">

            {/* Heading */}

            <h1

                className="fw-bold mb-4"

            >

                Fine Management

            </h1>


            {/* Search */}

            <div className="mb-4">

                <SearchBar

                    searchTerm={searchTerm}

                    setSearchTerm={setSearchTerm}

                    placeholder="Search Student ID..."

                />

            </div>


            {/* Fine Form */}

            <div className="mb-5">

                <FineForm

                    formData={formData}

                    setFormData={setFormData}

                    handleSubmit={handleSubmit}

                />

            </div>


            {/* Fine Table */}

            <FineTable

                fines={filteredFines}

            />

        </div>

    );

}

export default Fines;