import React, {Component} from 'react';


import './OutputPanel.css';
import '../index.css';

import SugarChart from '../components/SugarChart';
import InfoPanel from '../components/InfoPanel';

class OutputPanel extends Component {
    state = {
        data: []
    };

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