import { useState, useEffect } from "react";
import { Doughnut } from 'react-chartjs-2';

import externalTooltipHandler from '../../CustomChart/tooltip';
import "chart.js/auto";

import './Dashboard.scss'

function Dashboard() {
    const labels = ['Consumed', 'Saved', 'Remaining']
    const chartOptions = {
        offset: 5,
        radius: "80%",
        rotation: 10,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false,
                position: 'nearest',
                external: externalTooltipHandler
            }
        }
    }

    const [data, setData] = useState({
        labels,
        datasets: [{
            data: [12, 19, 3],
            borderWidth: 1
        }]
    })

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="canvas-display">
                <Doughnut className="chart" data={data} options={chartOptions} />
            </div>
            <div className="transaction-table">

            </div>
        </div>
    )
}

export default Dashboard;