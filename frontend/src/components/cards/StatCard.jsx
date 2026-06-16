
import "./StatCard.css";

function StatCard({

    title,

    value,

    icon,

    color

}) {

    return (

        <div

            className="stat-card"

            style={{

                background: color

            }}

        >

            <div className="stat-card-body">

                <div>

                    <h5 className="stat-title">

                        {title}

                    </h5>

                    <h2 className="stat-value">

                        {value}

                    </h2>

                </div>

                <div className="stat-icon">

                    {icon}

                </div>

            </div>

        </div>

    );

}

export default StatCard;
