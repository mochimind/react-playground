import React, {Component} from 'react';


import './OutputPanel.css';
import '../index.css';
import SugarChart from './SugarChart';

class OutputPanel extends Component {
    render() {
        return(
            <div className='outputPanel'>
                <SugarChart data={[['Blood Sugar', 'Time'],[0,0]]} />
            </div>
        );
    }
}


export default OutputPanel;