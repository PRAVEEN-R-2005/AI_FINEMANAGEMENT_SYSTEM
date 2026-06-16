function ViolationTable({

    violations

}) {

    return (

        <div className="card shadow rounded-4 p-4">

            <h3 className="mb-4">

                Violations

            </h3>

            <table className="table table-hover align-middle">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>

                        <th>Description</th>

                        <th>Category</th>

                        <th>Severity</th>

                    </tr>

                </thead>

                <tbody>

                    {

                        violations.length > 0 ?

                        violations.map(

                            (violation) => (

                                <tr

                                    key={violation.violation_id}

                                >

                                    <td>

                                        {violation.violation_id}

                                    </td>

                                    <td>

                                        {violation.description}

                                    </td>

                                    <td>

                                        {violation.category}

                                    </td>

                                    <td>

                                        {

                                            violation.severity === "High"

                                            ?

                                            <span className="badge bg-danger">

                                                High

                                            </span>

                                            :

                                            violation.severity === "Medium"

                                            ?

                                            <span className="badge bg-warning">

                                                Medium

                                            </span>

                                            :

                                            <span className="badge bg-success">

                                                Low

                                            </span>

                                        }

                                    </td>

                                </tr>

                            )

                        )

                        :

                        <tr>

                            <td

                                colSpan="4"

                                className="text-center"

                            >

                                No Violations Found

                            </td>

                        </tr>

                    }

                </tbody>

            </table>

        </div>

    );

}

export default ViolationTable;