import { useState } from 'react';
import Chart from "react-apexcharts";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Specs } from "./Specs";

export function Graph({ data, title, specslist, type }) {
    let [state, setstate] = useState({
        colors: ["#165DFF", "#14C9C9"],
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [23, 24, 25, 26, 27, 28, 29, 30, 1, 2, 3, 4]
            },
            yaxis: {
                min: 0,
                max: 10000,
                tickAmount: 6
            }
        },
        series: data
    }
    );
    return (
        <div className="graph">
            <div className="graph_header">
                <h4>{title}</h4>
                <div className="graph_header_info">
                    <p>Last 7 days</p>
                    <ExpandMoreIcon />

                </div>
            </div>
            <div className="graph_specs">
                {specslist.map(val => <Specs name={val.name} amount={val.amount} percentage={val.percentage} clr={val.clr} />)}



            </div>
            <div className="graph_picture">
                <Chart
                    options={state.options}
                    series={state.series}

                    width="400"
                    height="200" />
            </div>
        </div>

    );
}
