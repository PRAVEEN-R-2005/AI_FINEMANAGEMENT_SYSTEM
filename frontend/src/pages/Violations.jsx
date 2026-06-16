import { useEffect, useState } from "react";

import api from "../services/api";

import ViolationForm from "../components/forms/ViolationForm";

import ViolationTable from "../components/tables/ViolationTable";

import SearchBar from "../components/common/SearchBar";

import LoadingSpinner from "../components/common/LoadingSpinner";

function Violations() {

    // ======================
    // State
    // ======================

    const [violations, setViolations] = useState([]);

    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    const [formData, setFormData] = useState({

        student_id: "",

        description: "",

        category: "",

        severity: "Low"

    });

    // ======================
    // Fetch Violations
    // ======================

    useEffect(() => {

        fetchViolations();

    }, []);

    const fetchViolations = async () => {

        try {

            const token = localStorage.getItem("token");

            const response = await api.get(

                "/violations",

                {

                    headers: {

                        Authorization:

                            `Bearer ${token}`

                    }

                }

            );

            setViolations(

                response.data

            );

        }

        catch (err) {

            console.log(

                "Error fetching violations:",

                err

            );

        }

        finally {

            setLoading(false);

        }

    };

    // ======================
    // Add Violation
    // ======================

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token = localStorage.getItem("token");

            await api.post(

                "/violations",

                formData,

                {

                    headers: {

                        Authorization:

                            `Bearer ${token}`

                    }

                }

            );

            fetchViolations();

            setFormData({

                student_id: "",

                description: "",

                category: "",

                severity: "Low"

            });

        }

        catch (err) {

            console.log(

                "Error adding violation:",

                err

            );

        }

    };

    // ======================
    // Search Filter
    // ======================

    const filteredViolations = violations.filter(

        (violation) =>

            violation.description

                ?.toLowerCase()

                .includes(

                    searchTerm.toLowerCase()

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

                Violations

            </h1>

            {/* Search */}

            <div

                className="mb-4"

            >

                <SearchBar

                    searchTerm={searchTerm}

                    setSearchTerm={setSearchTerm}

                    placeholder="Search Violation..."

                />

            </div>

            {/* Form */}

            <div

                className="mb-5"

            >

                <ViolationForm

                    formData={formData}

                    setFormData={setFormData}

                    handleSubmit={handleSubmit}

                />

            </div>

            {/* Table */}

            <ViolationTable

                violations={filteredViolations}

            />

        </div>

    );

}

export default Violations;