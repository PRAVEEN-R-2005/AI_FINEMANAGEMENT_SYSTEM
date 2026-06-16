function FineForm({

    formData,

    setFormData,

    handleSubmit

}) {

    return (

        <div className="card shadow p-4 rounded-4">

            <h3 className="mb-4">

                Add Fine

            </h3>

            <form onSubmit={handleSubmit}>

                {/* Student ID */}

                <div className="mb-3">

                    <label className="form-label">

                        Student ID

                    </label>

                    <input

                        type="number"

                        className="form-control"

                        value={formData.student_id}

                        onChange={(e) =>

                            setFormData({

                                ...formData,

                                student_id: e.target.value

                            })

                        }

                        required

                    />

                </div>


                {/* Violation ID */}

                <div className="mb-3">

                    <label className="form-label">

                        Violation ID

                    </label>

                    <input

                        type="number"

                        className="form-control"

                        value={formData.violation_id}

                        onChange={(e) =>

                            setFormData({

                                ...formData,

                                violation_id: e.target.value

                            })

                        }

                        required

                    />

                </div>


                {/* Amount */}

                <div className="mb-3">

                    <label className="form-label">

                        Amount

                    </label>

                    <input

                        type="number"

                        className="form-control"

                        value={formData.amount}

                        onChange={(e) =>

                            setFormData({

                                ...formData,

                                amount: e.target.value

                            })

                        }

                        required

                    />

                </div>


                {/* Status */}

                <div className="mb-3">

                    <label className="form-label">

                        Status

                    </label>

                    <select

                        className="form-select"

                        value={formData.status}

                        onChange={(e) =>

                            setFormData({

                                ...formData,

                                status: e.target.value

                            })

                        }

                    >

                        <option value="Pending">

                            Pending

                        </option>

                        <option value="Paid">

                            Paid

                        </option>

                    </select>

                </div>


                {/* Payment Date */}

                <div className="mb-3">

                    <label className="form-label">

                        Payment Date

                    </label>

                    <input

                        type="date"

                        className="form-control"

                        value={formData.payment_date}

                        onChange={(e) =>

                            setFormData({

                                ...formData,

                                payment_date: e.target.value

                            })

                        }

                    />

                </div>


                <button

                    type="submit"

                    className="btn btn-success"

                >

                    Add Fine

                </button>

            </form>

        </div>

    );

}

export default FineForm;