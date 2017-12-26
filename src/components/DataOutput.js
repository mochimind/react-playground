import React from 'react';
import './DataOutput.css';
import '../index.css';

const dataOutput = (props) => {
    return (
        <div class='dataContainer dataOutput'>
            <span class='dataColLabel'>{props.label}</span>
            <span class='dataColValue'>{props.value}</span>
        </div>
    );
};

export default dataOutput;
