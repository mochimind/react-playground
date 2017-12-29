
import Activity from '../activity/Activity';
import * as state from './State';

// to simplify the implementation in visual components, we manage the instance of Timeline here
export const stat = new Timeline();

export class Timeline {
    // a sequential list of segments which create a graph
    segments = [];

    insert = (activity) => {
        // split any straddling beginning segments and create a new segment
        let containingSegment = this.getContainingSegment(activity.start);
        let splitSegments = containingSegment != null ? containingSegment.split(activity.start) : null;
        let internalSegments = [];

        // add second half of split segment to internal segments
        if (splitSegments != null && splitSegments[1] != null) { internalSegments.push(splitSegments[1]); }

        // add fully contained segments to internal segments
        internalSegments = [...internalSegments, ...this.getFullyContainedSegments(activity.start, activity.end)];

        // split straddling ending segment to create a new segment
        containingSegment = this.getContainingSegment(activity.end);
        splitSegments = containingSegment != null ? containingSegment.split(activity.end) : null;

        // add first half of split segment to internal segments
        if (splitSegments != null && splitSegments[0] != null) { internalSegments.push(splitSegments[0]); }

        // remove any generated segments within the body
        // replace with empty segment if generated was the only activity in the segment

        // add this activity to all body segments

        // adjust all activities in the body segment

        // add generated segments to the end of this is the last segment
    }

    remove = (activity) => {

    }

    // returns the one segment that contains time
    // if a segment ends exactly on time, it does not count as containing time, but a segment
    // starting exactly at time is considered as containing time
    getContainingSegment = (time) => {
        for (let i=0 ; i<this.segments ; i++) {
            if (this.segment[i].start <= time && this.segment[i].end > time) {
                return this.segment[i];
            }
        }

        return null;
    }

    // returns an array of segments that start after start and end before end
    getFullyContainedSegments = (start, end) => {
        this.segments.filter((tok) => tok.start >= start && tok.end <= end);
    }

    getNextSegment = (segment) => {
        
    }



    // returns an array of objects with the following properties:
    // {time: <time of peak>, value: <value at peak>}
    getPeaks = (start, finish) => {

    }

    // returns an array of numbers that represent the hourly readings between start & finish
    // data rounded to the nearest hour
    getHourlyData = (start, finish) => {

    }

    // returns an array of  states between start & finish inclusive
    getStates = (start, finish) => {

    }

    getGlycationMinutes = (start, finish) => {

    }

    // todo: we will need to do some optimization here either through limiting database queries
    //       or some other method because this will factor in all states ever for this user
    //       this function is exponential calculation time
    getReading = (time) => {

    }

    // returns the state before this state or null if this is the first state
    getPriorState = (state) => {

    }
}

