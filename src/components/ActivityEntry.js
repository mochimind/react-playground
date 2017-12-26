import React from 'react';
import './ActivityEntry.css';
import '../index.css';

// inputs: label: the text label to display, value: the value inside the textBox, 
const activityEntry = (props) => {
    return (
        <div class='dataContainer activityEntry'>
            <span class='dataColLabel'>{props.label}</span>
            <input type='text' class="dataColValue" value={props.value}/>
        </div>
    );
};

export default activityEntry;