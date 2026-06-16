function ViolationForm({

    formData,

    setFormData,

    handleSubmit

}) {

    return (

        <div className="card shadow p-4 rounded-4">

            <h3 className="mb-4">

                Add Violation

            </h3>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">

                    <label>

                        Student ID

                    </label>

                    <input

                        type="number"

                        className="form-control"

                        value={formData.student_id}

                        onChange={(e)=>

                            setFormData({

                                ...formData,

                                student_id:e.target.value

                            })

                        }

                    />

                </div>

                <div className="mb-3">

                    <label>

                        Description

                    </label>

                    <textarea

                        className="form-control"

                        value={formData.description}

                        onChange={(e)=>

                            setFormData({

                                ...formData,

                                description:e.target.value

                            })

                        }

                    />

                </div>

                <div className="mb-3">

                    <label>

                        Category

                    </label>

                    <input

                        type="text"

                        className="form-control"

                        value={formData.category}

                        onChange={(e)=>

                            setFormData({

                                ...formData,

                                category:e.target.value

                            })

                        }

                    />

                </div>

                <div className="mb-3">

                    <label>

                        Severity

                    </label>

                    <select

                        className="form-select"

                        value={formData.severity}

                        onChange={(e)=>

                            setFormData({

                                ...formData,

                                severity:e.target.value

                            })

                        }

                    >

                        <option>

                            Low

                        </option>

                        <option>

                            Medium

                        </option>

                        <option>

                            High

                        </option>

                    </select>

                </div>

                <button

                    className="btn btn-warning"

                >

                    Add Violation

                </button>

            </form>

        </div>

    );

}

export default ViolationForm;