
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post(

                "/auth/login",

                {

                    email,

                    password

                }

            );

            // Save JWT Token

            localStorage.setItem(

                "token",

                response.data.token

            );

            // Save Role (optional)

            localStorage.setItem(

                "role",

                response.data.role

            );

            alert(

                "Login Successful"

            );

            // Redirect to Dashboard

            navigate(

                "/dashboard"

            );

        }

        catch (err) {

            console.log(err);

            setError(

                err.response?.data?.message ||

                "Invalid Email or Password"

            );

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-5">

                    <div className="card shadow p-4">

                        <h1 className="mb-4">

                            Login

                        </h1>

                        {

                            error &&

                            <div className="alert alert-danger">

                                {error}

                            </div>

                        }

                        <form onSubmit={handleLogin}>

                            <div className="mb-3">

                                <label>

                                    Email

                                </label>

                                <input

                                    type="email"

                                    className="form-control"

                                    placeholder="Enter Email"

                                    value={email}

                                    onChange={(e) =>

                                        setEmail(

                                            e.target.value

                                        )

                                    }

                                    required

                                />

                            </div>

                            <div className="mb-3">

                                <label>

                                    Password

                                </label>

                                <input

                                    type="password"

                                    className="form-control"

                                    placeholder="Enter Password"

                                    value={password}

                                    onChange={(e) =>

                                        setPassword(

                                            e.target.value

                                        )

                                    }

                                    required

                                />

                            </div>

                            <button

                                type="submit"

                                className="btn btn-primary w-100"

                            >

                                Login

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;
