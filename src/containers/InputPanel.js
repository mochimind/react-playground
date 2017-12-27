import React, {Component} from 'react';

import ActivityInput from "../components/ActivityInput";
import SubmitButton from "../components/SubmitButton";

import './InputPanel.css';
import '../index.css';

import * as TemplateFactory from "../data/TemplateFactory";

class InputPanel extends Component {
    state = {
        activities: [],
        curDate: (new Date()).toLocaleString(),
        matchedActivity: null
    };

    handleActivityChange = (newVal) => {
        console.log(newVal)
        this.setState({matchedActivity: newVal})
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
                    activityVal={this.state.matchedActivity}
                    activityChange={this.handleActivityChange}
                    dateChange={this.handleDateChange}
                />
                <SubmitButton label="Submit" />
            </div>
        );
    }
}


export default InputPanel;