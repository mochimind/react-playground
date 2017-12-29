import * as util from '../Utils';

BASELINE_SUGAR = 80;
BASELINE_CHANGE_PER_MIN = 1;

export default class Segment {
    constructor(start, end, startVal, changePerMin) {
        this.start = start;
        this.end = end;
        this.activities = [];
        this.startVal = startVal
        this.changePerMin = changePerMin;
    }

    addActivity = (activity) => {
        this.activities.push(activity);
        this.changePerMin += activity.template.getChangePerMin();
    }

    // returns the value at a specified time
    // if time is not specified, or larger than the end time, then the value at end time is returned
    getVal = (time=this.end) => {
        if (time < this.start) { 
            console.log("error: trying to fetch segment value before start");
            return 0; 
        }

        if (time > this.end) {
            time = this.end;
        }
        
        const numMinutes = utils.DiffMinutes(time, this.start);
        return numMinutes * changePerMin;
    }

    // breaks apart the segment at time if possible and returns an array of 2 elements
    // the first segment will be from start [inclusive] to time [exclusive]
    // the second segment will be from time [inclusive] to end [exclusive]
    split = (time) => {
        const outVal = [];
        if (time !== this.start) {
            outVal.push (this);
            this.end = time;
        } else {
            outVal.push(null);
        }

        if (time !== this.end) {
            outVal.push(new Segment(time, this.end, this.startVal, this.changePerMin));
        } else {
            outVal.push(null);
        }
    }
}


