import React, {Component} from 'react';

import ActivityInput from "../components/ActivityInput";
import SubmitButton from "../components/SubmitButton";

import './InputPanel.css';
import '../index.css';

import * as timeline from '../data/timeline/Timeline';
import Activity from '../data/activity/Activity';

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

    handleSubmit = (event) => {
        if (this.state.matchedActivity == null) {
            this.props.messageUser("Please select an activity type!", "error");
            return
        }

        if (this.state.curDate == null || this.state.curDate.trim().length === 0) {
            this.props.messageUser("The date time you specified is invalid!", "error");
            this.setState({curDate: (new Date()).toLocaleString()});
            return;
        }
        const userDate = new Date(this.state.curDate);
        if (userDate.getTime() === 0) {
            this.props.messageUser("The date time you specified is invalid!", "error");
            this.setState({curDate: (new Date()).toLocaleString()});
            return;
        }

        this.props.messageUser("successfully added entry!", "success");
        const newActivity = new Activity(this.state.matchedActivity, );

        timeline.stat.insert(newActivity);

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
                <SubmitButton label="Submit" clicked={this.handleSubmit} />
            </div>
        );
    }
}


export default InputPanel;