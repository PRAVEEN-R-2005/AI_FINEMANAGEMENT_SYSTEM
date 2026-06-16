import api from "./api";


// =====================
// Login
// =====================

export const loginUser = async (

    email,

    password

) => {

    return await api.post(

        "/auth/login",

        {

            email,

            password

        }

    );

};


// =====================
// Register
// =====================

export const registerUser = async (

    userData

) => {

    return await api.post(

        "/auth/register",

        userData

    );

};