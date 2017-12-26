import React from 'react';
import {Chart} from 'react-google-charts';

import './SugarChart.css';

const sugarChart = (props) => {
    if (props.data == null || props.data.length === 0) {
        return <div className='chartContainer'></div>;
    } else {
        return (
            <div className='chartContainer'>
                <Chart
                    chartType="LineChart"
                    data={props.data}
                    options={{
                        hAxis: { title: 'Time', minValue: 0},
                        vAxis: { title: 'Blood Sugar', minValue: 0},
                        legend: 'none',
                    }}
                    legend_toggle
                    width="100%"
                    height="100%"
                />
            </div>
        );    
    }
}

export default sugarChart;
