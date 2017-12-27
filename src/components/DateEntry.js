import React from 'react';
import './DateEntry.css';
import '../index.css';

// takes as input the label, the default value
// TODO: implement a visual datetime picker
const dateEntry = (props) => {
    return (
        <div className='dataContainer dateEntry'>
            <span className='dataColLabel'>{props.label}</span>
            <input className='dataColValue' type='text' value={props.value} onChange={props.changed}></input>
        </div>
    );
};

export default dateEntry;