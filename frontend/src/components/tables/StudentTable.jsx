
function StudentTable({ students }) {

    console.log("Student Data:", students);

    return (

        <div className="card shadow">

            <div className="card-body">

                <table className="table table-hover">

                    <thead className="table-dark">

                        <tr>

                            <th>ID</th>

                            <th>Name</th>

                            <th>Department</th>

                            <th>Email</th>

                        </tr>

                    </thead>

                    <tbody>

                        {

                            students.length > 0 ?

                            students.map(

                                (student, index) => (

                                    <tr

                                        key={index}

                                    >

                                        <td>

                                            {

                                                student.student_id ||

                                                student.id ||

                                                index + 1

                                            }

                                        </td>

                                        <td>

                                            {

                                                student.name

                                            }

                                        </td>

                                        <td>

                                            {

                                                student.department

                                            }

                                        </td>

                                        <td>

                                            {

                                                student.email

                                            }

                                        </td>

                                    </tr>

                                )

                            )

                            :

                            (

                                <tr>

                                    <td

                                        colSpan="4"

                                        className="text-center"

                                    >

                                        No Students Found

                                    </td>

                                </tr>

                            )

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}

export default StudentTable;
