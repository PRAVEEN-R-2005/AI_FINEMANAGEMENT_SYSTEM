function StudentForm({

    formData,

    setFormData,

    handleSubmit

}) {

    return (

        <div className="card shadow p-4 rounded-4">

            <h3 className="mb-4">

                Add Student

            </h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label className="form-label">

                        Name

                    </label>

                    <input

                        type="text"

                        className="form-control"

                        value={formData.name}

                        onChange={(e)=>

                            setFormData({

                                ...formData,

                                name:e.target.value

                            })

                        }

                        required

                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Department

                    </label>

                    <input

                        type="text"

                        className="form-control"

                        value={formData.department}

                        onChange={(e)=>

                            setFormData({

                                ...formData,

                                department:e.target.value

                            })

                        }

                        required

                    />

                </div>

                <div className="mb-3">

                    <label className="form-label">

                        Email

                    </label>

                    <input

                        type="email"

                        className="form-control"

                        value={formData.email}

                        onChange={(e)=>

                            setFormData({

                                ...formData,

                                email:e.target.value

                            })

                        }

                        required

                    />

                </div>

                <button

                    className="btn btn-primary"

                >

                    Add Student

                </button>

            </form>

        </div>

    );

}

export default StudentForm;