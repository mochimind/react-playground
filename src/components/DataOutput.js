import React from 'react';
import './DataOutput.css';
import '../index.css';

const dataOutput = (props) => {
    return (
        <div className='dataContainer dataOutput'>
            <span className='dataColLabel'>{props.label}</span>
            <span className='dataColValue'>{props.value}</span>
        </div>
    );
};

export default dataOutput;
