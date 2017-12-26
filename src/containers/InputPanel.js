import React, {Component} from 'react';

import ActivityInput from "../components/ActivityInput";
import SubmitButton from "../components/SubmitButton";

import './InputPanel.css';
import '../index.css';

class InputPanel extends Component {
    render() {
        return(
            <div class='inputPanel'>
                <h1>Hello World</h1>
                <ActivityInput />
                <SubmitButton label="Submit" />
            </div>
        );
    }
}


export default InputPanel;