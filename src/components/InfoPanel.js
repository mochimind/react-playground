import React from 'react';
import './InfoPanel.css';
import '../index.css';

import DataOutput from './DataOutput';

// takes as input the label, the default value
// TODO: implement a visual datetime picker
const infoPanel = (props) => {
    return (
        <div className='infoPanel'>
            <h2>Your Info</h2>
            <div className='infoColumn'>
                <DataOutput label='Avg daily glycation' value={props.avgGlycation}/>
            </div>
            <div className='infoColumn'>
            </div>
            <div className='infoColumn'>
            </div>
        </div>
    );
};

export default infoPanel;