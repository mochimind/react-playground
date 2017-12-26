import React from 'react';
import './DateEntry.css';
import '../index.css';

// takes as input the label, the default value
// TODO: implement a visual datetime picker
const dateEntry = (props) => {
    return (
        <div class='dataContainer dateEntry'>
            <span class='dataColLabel'>{props.label}</span>
            <input class='dataColValue' type='text' value={props.value}></input>
        </div>
    );
};

export default dateEntry;