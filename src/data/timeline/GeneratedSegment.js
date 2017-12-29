import Segment from './Segment';
import * as util from '../Utils';
import * as timeline from './Timeline';

export default class GeneratedSegment extends Segment {
    constructor (start, startVal, steadystateVal, changePerMin, nextElement) {
        const lifespan = this.getLifespan(nextElement);

        super(start, util.AdjustMinutes(start, lifespan), startVal, changePerMin);
        this.steadystateVal = steadystateVal;
    }

    // generated segments don't have a fixed end time, their end time is based off of how long it will take
    // to get the current value to the steadystate value OR when the next element occurs - whichever is smaller
    getLifespan = (nextElement) => {
        return nextElement != null ? 
            Math.min(util.DiffMinutes(nextElement.start, start), Math.abs(startVal - steadystateVal) / changePerMin) : 
            Math.abs(startVal - steadystateVal) / changePerMin;

    }

    addActivity = (activity) => {
        console.log("error: trying to add an activity to a generated segment");
    }

    // almost the same as the parent's split. we just create a generated segment rather than a normal segment
    split = (time) => {
        const outVal = [];
        if (time !== this.start) {
            outVal.push (this);
            this.end = time;
        } else {
            outVal.push(null);
        }

        if (time !== this.end) {
            outVal.push(new GeneratedSegment(time, this.startVal, this.steadystateVal, 
                this.changePerMin, timeline.stat.getNextSegment(this)));
        } else {
            outVal.push(null);
        }
    }
}


