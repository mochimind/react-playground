import React from 'react';
import './ActivityInput.css';

import DateEntry from './DateEntry';
import ActivityEntry from './ActivityEntry';
import DataOutput from './DataOutput';

const activityInput = (props) => {
    return (
        <div class='activityInput'>
            <ActivityEntry label='Activity' value = "" />
            <DateEntry label='Time' value={(new Date()).toLocaleString()} />
            <DataOutput label='ID' value="" />

            <DataOutput label='Glycemic Index' value="" />
            <DataOutput label='Type' value="" />
        </div>
    );
};

export default activityInput;