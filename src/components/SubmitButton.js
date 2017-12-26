import React from 'react';
import './SubmitButton.css';
import '../index.css';

// takes as input the label and the event onClick
// may not be worth it to put this in its own component
const submitButton = (props) => {
    return (
        <div className='submitButton'>
            <span className='button submitButton' onClick={props.clicked}>{props.label}</span>
        </div>
    );
};

export default submitButton;