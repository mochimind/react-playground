
import Activity from '../activity/Activity';
import GeneratedSegment from './GeneratedSegment';
import * as templates from '../activity/TemplateFactory';

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
        if (splitSegments != null && splitSegments[0] != null) { 
            internalSegments.push(splitSegments[0]);
        } else {
            // we ended up in non-segmented time, create a new empty segment 
            const lastSegment = internalSegments.length !== 0 ? internalSegments[internalsegments.length - 1] : null;
            let newSeg = new Segment(lastSegment != null ? lastSegment.end : activity.start, activity.end, 0, 0)
            internalSegments.push(newSeg);
            this.insertSegment(newSeg);
        }

        let insertedItems = 0;
        let newInternalSegments = [];
        for (let i=0 ; i<internalSegments.length ; i++) {
            // replace any generated segments within the body with empty regular segments
            if (internalSegments[i] instanceof GeneratedSegment) {
                let newReplaceSeg = new Segment(internalSegments[i].start, internalSegments[i].end, 0, 0);
                this.replaceSegment(internalSegments[i], newReplaceSeg);
                internalSegments[i] = newReplaceSeg;
            }
            
            // patch any non-segmented time inside the body with new empty segments
            if (i>0 && internalSegments[i-1].end != internalSegments[i].start) {
                let newBlankSeg = new Segment(internalSegments[i-1].end, internalSegments[i].start, 0, 0);
                // add this activity to newly created segments
                newBlankSeg.addActivity(activity);

                newInternalSegments.push(newBlankSeg);
                this.insertSegment(newBlankSeg);
            }

            newInternalSegments.push(internalSegments[i]);


            // adjust activities & changePerMin in the body segment
            internalSegments[i].addActivity(activity);
        }

        // add generated segments to the end of this if this is the last segment
        if (splitSegments == null || splitSegments[1] == null) {
            let newGenSeg = new GeneratedSegment(activity.end, 0, templates.GENERATED_BASELINE, templates.GENERATED_CHANGE_PER_MIN, null);
            this.insertSegment(newGenSeg);
        }
    }

    remove = (activity) => {

    }

    // inserts segment chronologically into existing segments
    insertSegment = (segment) => {

    }

    // replaces an existing segment with a new segment
    replaceSegment = (oldSegment, newSegment) => {

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
}

