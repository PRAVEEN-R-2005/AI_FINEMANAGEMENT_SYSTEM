import {

    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer

}

from "recharts";

function BarChartCard({

    data,

    title

}) {

    return (

        <div className="card shadow p-4 rounded-4">

            <h4 className="mb-4">

                {title}

            </h4>

            <ResponsiveContainer

                width="100%"

                height={300}

            >

                <BarChart

                    data={data}

                >

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Bar

                        dataKey="value"

                        fill="#3B82F6"

                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default BarChartCard;