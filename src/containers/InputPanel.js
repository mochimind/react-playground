import React, {Component} from 'react';
import DataOutput from '../components/DataOutput';


class InputPanel extends Component {
    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <DataOutput label='test' value='testing, testing, 123' />
                <DataOutput label='test2' value='testing, testing, 111' />
            </div>
        );
    }
}


export default InputPanel;