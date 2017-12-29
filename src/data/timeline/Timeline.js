
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

        this.recalculateSegments();
    }

    remove = (activity) => {
        let lastNonRedundant = null;
        for (let i=0 ; i<this.segments.length ; i++) {
            // remove the activity from all segments
            if (this.segments[i].removeActivity(activity)) {
                // merge redundant segments
                if (this.segments[i].isRedundant()) {
                    this.segments.splice(i, 1);
                    i--;
            
                    if (lastNonRedundant instanceof GeneratedSegment) {
                        // we don't need to range extend generated segments because that'll be done automatically
                        // when the segments are recalculated. Therefore, do nothing here
                    } else {
                        // create generated segments in non-segmented space
                        // again, we don't do anything with the initialization of values and let the recalculation do it
                        let newGenSeg = new GeneratedSegment(lastNonRedundant.end, 0, templates.GENERATED_BASELINE, templates.GENERATED_CHANGE_PER_MIN, null);
                    }
                } else {
                    lastNonRedundant = this.segments[i];
                }
                
            }
        }

        this.recalculateSegments();
    }

    // inserts segment chronologically into existing segments
    // note: function does not create generated segments or check impact of inserts, it just blindly inserts
    insertSegment = (segment) => {
        for (let i=0 ; i<this.segments.length ; i++) {
            if (this.segments[i].end <= segment.start) {
                this.segments.splice(i,0,segment);
                return;
            }
        }
        // we've reached the end and still no insert, insert it at the very end
        this.segments.push(segment);
    }

    // replaces an existing segment with a new segment
    replaceSegment = (oldSegment, newSegment) => {
        for (let i=0 ; i<this.segments.length ; i++) {
            if (this.segments[i] === oldSegment) {
                this.segments[i] = newSegment;
                return true;
            }
        }

        return false;
    }

    // recalculates the startValues for each segment. Also recalculates the length of generated segments
    recalculateSegments = () => {

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

    // returns an array of numbers that represent the hourly readings between start & finish
    // data rounded to the nearest hour
    getHourlyData = (start, finish) => {

    }

    getGlycationMinutes = (start, finish) => {

    }
}

