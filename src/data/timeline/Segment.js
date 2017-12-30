import * as util from '../Utils';
import * as config from '../Config';

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

    // tries to remove the activity from the specified segment
    // returns true if the activity was successfully removed, false if activity was not part of segment
    removeActivity = (activity) => {
        for (let i=0 ; i<this.activities.length ; i++) {
            if (this.activities[i] === activity) {
                this.activities.splice(i,1);
                this.changePerMin -= activity.template.getChangePerMin();
                return true;
            }
        }

        return false;
    }

    // returns true if this segment does not change anything AND doesn't have any activities left
    // todo: we may need to replace changePerMin === 0 with some threshold due to floating point math
    isRedundant = () => {
        return (this.activities.length === 0 && this.changePerMin === 0);
    }

    // returns the DELTA value at a specified time (not the actual value)
    // if time is not specified, or larger than the end time, then the value at end time is returned
    getVal = (time=this.end) => {
        if (time < this.start) { 
            console.log("error: trying to fetch segment value before start");
            return 0; 
        }

        if (time > this.end) {
            time = this.end;
        }

        const numMinutes = util.DiffMinutes(this.start, time);
        return numMinutes * this.changePerMin;
    }

    // recalculates the startVal of this segment
    recalculate (lastSeg, nextSeg) {
        this.startVal = lastSeg.startVal + lastSeg.getVal(this.start);
    }

    // breaks apart the segment at time if possible and returns an array of 2 elements
    // the first segment will be from start [inclusive] to time [exclusive]
    // the second segment will be from time [inclusive] to end [exclusive]
    split = (time) => {
        const outVal = [];
        if (time.getTime() !== this.start.getTime()) {
            outVal.push (this);
            this.end = time;
        } else {
            outVal.push(null);
        }

        if (time.getTime() !== this.end.getTime()) {
            outVal.push(new Segment(time, this.end, this.startVal, this.changePerMin));
        } else {
            outVal.push(null);
        }

        return outVal;
    }

    // returns the number of minutes inside this segment where glycation occurs
    getGlycationMinutes = () => {
        if (this.startVal <= config.GLYCATION_POINT && this.changePerMin <= 0) {
            return 0;
        }

        if (this.startVal > config.GLYCATION_POINT) {
            // we are already glycating, find when glycation stops
            const glycationTime = Math.round(this.startVal - config.GLYCATION_POINT) / this.changePerMin;
            return Math.min(util.DiffMinutes(this.start, this.end), glycationTime);
        } else {
            // we haven't started glycating, find out when we start glycating
            const glycationTime = (config.GLYCATION_POINT - this.startVal) / this.changePerMin;
            return Math.max(0, util.DiffMinutes(this.start, this.end) - glycationTime);
        }
    }
}


