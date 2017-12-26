import React from 'react';
import {Chart} from 'react-google-charts';

const sugarChart = (props) => {
    return (
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
    );
}

export default sugarChart;
