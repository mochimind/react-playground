import * as util from '../Utils';


export default class Activity {
    constructor(template, time) {
        this.start = time;
        this.end = util.AdjustMinutes(time, template.getDuration());
        this.template = template;
    }
}

