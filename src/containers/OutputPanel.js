import React, {Component} from 'react';


import './OutputPanel.css';
import '../index.css';

import SugarChart from '../components/SugarChart';
import InfoPanel from '../components/InfoPanel';

import * as timelineEvents from '../data/timeline/TimelineEvents';

class OutputPanel extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
        
        timelineEvents.AddListener(this.handleDataChange);
    }

    handleDataChange = (eventType, newData) => {
        console.log(newData);
        if (eventType !== timelineEvents.EventType.update) { return; }
        const newArr = [['Time', 'Reading']];
        for (let i=0 ; i<newData.length ; i++) {
            let newEntry = newData[i];
            if (i === 0) {
                // for the first entry, we record not just the end value, but also the start value
                newArr.push([newEntry.startTime, newEntry.startVal]);
            }
            newArr.push([newEntry.endTime, newEntry.endVal]);
        }

        this.setState({data: newArr});
    }

    render() {
        return(
            <div className='outputPanel'>
                <SugarChart data={this.state.data} />
                <InfoPanel />
            </div>
        );
    }
}


export default OutputPanel;