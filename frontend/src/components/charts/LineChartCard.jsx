import {

    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer

}

from "recharts";

function LineChartCard({

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

                <LineChart

                    data={data}

                >

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="name" />

                    <YAxis />

                    <Tooltip />

                    <Line

                        type="monotone"

                        dataKey="value"

                        stroke="#10B981"

                        strokeWidth={3}

                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default LineChartCard;