import React from 'react';
import VirtualizedSelect from 'react-virtualized-select';

import './ActivityEntry.css';
import '../index.css';

import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import * as TemplateFactory from '../data/TemplateFactory';

// inputs: label - the text label to display
// value: the value inside the textBox
// changed: the handler to handle changes 
// options: the options to put into the list
const activityEntry = (props) =>{
    return (
        <div className='dataContainer activityEntry'>
            <span className='dataColLabel'>{props.label}</span>
            <VirtualizedSelect
                options={TemplateFactory.GetDescriptions()}
                value={props.value}
                onChange={props.changed}
                labelKey="description"
                valueKey="description"
            />
        </div>
    );    
};

export default activityEntry;