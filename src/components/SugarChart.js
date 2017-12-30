import React from 'react';
import {Chart} from 'react-google-charts';

import './SugarChart.css';

// TODO: google charts is not working properly with dates in this setup
// it keeps throwing error a.getTime() is not a function
// current workaround is to show minutes since the first entry 
const sugarChart = (props) => {
    if (props.data == null || props.data.length === 0) {
        return <div className='chartContainer'></div>;
    } else {
        console.log(new Date());
        return (
            <div className='chartContainer'>
                <Chart
                    chartType="LineChart"
                    options={{
                        hAxis: { title: 'Time', minValue: 0},
                        vAxis: { title: 'Blood Sugar', minValue: 0},
                        legend: 'none',
                    }}
                    columns={
                        [
                            {
                                type: 'number',
                                label: 'Time'},
                            {
                                type: 'number',
                                label: 'Reading'
                            }
                        ]
                    }
                    rows={props.data}
                    legend_toggle
                    width="100%"
                    height="100%"
                />
            </div>
        );    
    }
}

export default sugarChart;
