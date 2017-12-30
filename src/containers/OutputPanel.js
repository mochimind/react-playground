import React, {Component} from 'react';


import './OutputPanel.css';
import '../index.css';

import SugarChart from '../components/SugarChart';
import InfoPanel from '../components/InfoPanel';

import * as timelineEvents from '../data/timeline/TimelineEvents';
import * as util from '../data/Utils';

class OutputPanel extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
        
        timelineEvents.AddListener(this.handleDataChange);
    }

    handleDataChange = (eventType, newData) => {
        if (eventType !== timelineEvents.EventType.update) { return; }
        const newArr = [];
        for (let i=0 ; i<newData.length ; i++) {
            let newEntry = newData[i];
            // TODO: this is a hack workaround for google - proper but not working code commented out
            if (i === 0) {
                newArr.push([0, newEntry.startVal]);
            }

            newArr.push([util.MinutesBetween(newData[0].startTime, newEntry.endTime), newEntry.endVal]);

            /*
            let t = newEntry.startTime;
            console.log(t + "||" + t.getDay());
            if (i === 0) {
                // for the first entry, we record not just the end value, but also the start value
                newArr.push([
                    new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()),
                    newEntry.startVal]);
            }
            t = newEntry.endTime;
            newArr.push([
                new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()),
                newEntry.endVal]);
                */
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