import React from 'react';
import './DataOutput.css';

const dataOutput = (props) => {
    return (
        <div class='dataOutput'>
            <span class='label'>{props.label}</span>
            <span class='value'>{props.value}</span>
        </div>
    );
};

export default dataOutput;
