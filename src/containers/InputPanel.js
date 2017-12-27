import React, {Component} from 'react';

import ActivityInput from "../components/ActivityInput";
import SubmitButton from "../components/SubmitButton";

import './InputPanel.css';
import '../index.css';

import * as TemplateFactory from "../data/TemplateFactory";

class InputPanel extends Component {
    state = {
        activities: [],
        curActivity: "",
        curDate: (new Date()).toLocaleString(),
        matchedActivity: null
    };

    handleActivityChange = (event) => {
        const segment = event.target.value;
        let newActivity = null;
        if (segment.length > 0) {
            newActivity = TemplateFactory.GetBestMatch(segment);
        } 
        
        this.setState({
            curActivity: event.target.value,
            matchedActivity: newActivity
        });
    }

    handleDateChange = (event) => {
        this.setState({curDate: event.target.value});
    }

    render() {
        return(
            <div className='inputPanel'>
                <h2>Input Your Activities</h2>
                <ActivityInput 
                    dateVal={this.state.curDate}
                    activityVal={this.state.curActivity}
                    activityInfo={this.state.matchedActivity}
                    activityChange={this.handleActivityChange}
                    dateChange={this.handleDateChange}
                />
                <SubmitButton label="Submit" />
            </div>
        );
    }
}


export default InputPanel;