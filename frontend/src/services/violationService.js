import api from "./api";


// =====================
// Get Students
// =====================

export const getStudents = async (

    token

) => {

    return await api.get(

        "/students",

        {

            headers: {

                Authorization:

                    `Bearer ${token}`

            }

        }

    );

};


// =====================
// Add Student
// =====================

export const addStudent = async (

    formData,

    token

) => {

    return await api.post(

        "/students",

        formData,

        {

            headers: {

                Authorization:

                    `Bearer ${token}`

            }

        }

    );

};