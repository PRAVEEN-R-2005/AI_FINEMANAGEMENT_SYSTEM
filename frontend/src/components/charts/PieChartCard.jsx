import {

    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer

}

from "recharts";

function PieChartCard({

    data,

    title

}) {

    const COLORS = [

        "#3B82F6",
        "#10B981",
        "#F59E0B",
        "#EF4444",
        "#8B5CF6"

    ];

    return (

        <div className="card shadow p-4 rounded-4">

            <h4 className="mb-4">

                {title}

            </h4>

            <ResponsiveContainer

                width="100%"

                height={300}

            >

                <PieChart>

                    <Pie

                        data={data}

                        dataKey="value"

                        outerRadius={100}

                        label

                    >

                        {

                            data.map(

                                (

                                    entry,

                                    index

                                ) => (

                                    <Cell

                                        key={index}

                                        fill={

                                            COLORS[

                                                index %

                                                COLORS.length

                                            ]

                                        }

                                    />

                                )

                            )

                        }

                    </Pie>

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default PieChartCard;