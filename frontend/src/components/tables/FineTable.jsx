function FineTable({

    fines

}) {

    return (

        <div className="card shadow rounded-4 p-4">

            <h3 className="mb-4">

                Fine Management

            </h3>

            <table className="table table-hover align-middle">

                <thead className="table-dark">

                    <tr>

                        <th>Fine ID</th>

                        <th>Student ID</th>

                        <th>Amount</th>

                        <th>Status</th>

                        <th>Payment Date</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        fines.length > 0 ?

                        fines.map(

                            (fine) => (

                                <tr

                                    key={fine.fine_id}

                                >

                                    <td>

                                        {fine.fine_id}

                                    </td>

                                    <td>

                                        {fine.student_id}

                                    </td>

                                    <td>

                                        ₹{fine.amount}

                                    </td>

                                    <td>

                                        {

                                            fine.status === "Paid"

                                            ?

                                            <span className="badge bg-success">

                                                Paid

                                            </span>

                                            :

                                            <span className="badge bg-danger">

                                                Pending

                                            </span>

                                        }

                                    </td>

                                    <td>

                                        {

                                            new Date(

                                                fine.payment_date

                                            )

                                            .toLocaleDateString()

                                        }

                                    </td>

                                </tr>

                            )

                        )

                        :

                        <tr>

                            <td

                                colSpan="5"

                                className="text-center"

                            >

                                No Fine Records Found

                            </td>

                        </tr>

                    }

                </tbody>

            </table>

        </div>

    );

}

export default FineTable;