import api from "./api";


// =====================
// Get Fines
// =====================

export const getFines = async (

    token

) => {

    return await api.get(

        "/fines",

        {

            headers: {

                Authorization:

                    `Bearer ${token}`

            }

        }

    );

};


// =====================
// Add Fine
// =====================

export const addFine = async (

    formData,

    token

) => {

    return await api.post(

        "/fines",

        formData,

        {

            headers: {

                Authorization:

                    `Bearer ${token}`

            }

        }

    );

};