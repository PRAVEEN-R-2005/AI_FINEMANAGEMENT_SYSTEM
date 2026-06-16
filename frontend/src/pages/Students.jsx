
import { useEffect, useState } from "react";

import api from "../services/api";

import StudentForm from "../components/forms/StudentForm";
import StudentTable from "../components/tables/StudentTable";
import SearchBar from "../components/common/SearchBar";
import LoadingSpinner from "../components/common/LoadingSpinner";

function Students() {

    // =====================================
    // State
    // =====================================

    const [students, setStudents] = useState([]);

    const [loading, setLoading] = useState(true);

    const [searchTerm, setSearchTerm] = useState("");

    const [formData, setFormData] = useState({

        name: "",

        department: "",

        email: ""

    });


    // =====================================
    // Load Students
    // =====================================

    useEffect(() => {

        fetchStudents();

    }, []);


    const fetchStudents = async () => {

        try {

            setLoading(true);

            const token =

                localStorage.getItem(

                    "token"

                );

            const response =

                await api.get(

                    "/students",

                    {

                        headers: {

                            Authorization:

                                `Bearer ${token}`

                        }

                    }

                );

            console.log(

                "Students:",

                response.data

            );

            setStudents(

                response.data

            );

        }

        catch (err) {

            console.log(

                "Fetch Student Error:",

                err

            );

        }

        finally {

            setLoading(false);

        }

    };


    // =====================================
    // Add Student
    // =====================================

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const token =

                localStorage.getItem(

                    "token"

                );

            await api.post(

                "/students",

                formData,

                {

                    headers: {

                        Authorization:

                            `Bearer ${token}`

                    }

                }

            );

            alert(

                "Student Added Successfully"

            );

            fetchStudents();

            setFormData({

                name: "",

                department: "",

                email: ""

            });

        }

        catch (err) {

            console.log(

                "Add Student Error:",

                err

            );

        }

    };


    // =====================================
    // Search Filter
    // =====================================

    const filteredStudents =

        students.filter(

            (student) =>

                student.name

                    ?.toLowerCase()

                    .includes(

                        searchTerm.toLowerCase()

                    )

        );


    // =====================================
    // Loading Spinner
    // =====================================

    if (loading) {

        return <LoadingSpinner />;

    }


    // =====================================
    // UI
    // =====================================

    return (

        <div className="container-fluid">

            <h1 className="fw-bold mb-4">

                Students

            </h1>


            <div className="mb-4">

                <SearchBar

                    searchTerm={searchTerm}

                    setSearchTerm={setSearchTerm}

                    placeholder="Search Student..."

                />

            </div>


            <div className="mb-5">

                <StudentForm

                    formData={formData}

                    setFormData={setFormData}

                    handleSubmit={handleSubmit}

                />

            </div>


            <StudentTable

                students={filteredStudents}

            />

        </div>

    );

}

export default Students;