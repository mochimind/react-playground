import React from 'react';
import './ActivityInput.css';

import DateEntry from './DateEntry';
import ActivityEntry from './ActivityEntry';
import DataOutput from './DataOutput';

// receives dateVal - the current date time string, 
// activityVal - the current activity string
// activityInfo - an ActivityTemplate (which can be null)
// activitChange - a handler for any changes in the activity
// dateChange - a handler for any changes in the date time value
const activityInput = (props) => {
    return (
        <div className='activityInput'>
            <ActivityEntry label='Activity' value={props.activityVal} changed={props.activityChange} />
            <DateEntry label='Time' value={props.dateVal} changed={props.dateChange}/>
 
            <DataOutput label='ID' value={props.activityVal != null ? props.activityVal.id : ""} />
            <DataOutput label='Glycemic Index' value={props.activityVal != null ? props.activityVal.index : ""} />
            <DataOutput label='Type' value={props.activityVal != null ? props.activityVal.type : ""} />
        </div>
    );
};

export default activityInput;