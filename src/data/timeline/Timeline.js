
import Segment from './Segment';
import GeneratedSegment from './GeneratedSegment';
import * as templates from '../activity/TemplateFactory';
import * as timelineEvents from './TimelineEvents';


export class Timeline {
    // a sequential list of segments which create a graph
    constructor() {
        this.segments = [];
    }

    insert = (activity) => {
        // split any straddling beginning segments and create a new segment
        let containingSegment = this.getContainingSegment(activity.start);
        let splitSegments = containingSegment != null ? containingSegment.split(activity.start) : null;
        let internalSegments = [];

        console.log(splitSegments);

        // add second half of split segment to internal segments
        if (splitSegments != null && splitSegments[1] != null) { internalSegments.push(splitSegments[1]); }

        // add fully contained segments to internal segments
        const bodySegments = this.getFullyContainedSegments(activity.start, activity.end);
        if (bodySegments != null) {
            internalSegments.concat(bodySegments);
        }

        console.log(bodySegments);

        // split straddling ending segment to create a new segment
        containingSegment = this.getContainingSegment(activity.end);
        splitSegments = containingSegment != null ? containingSegment.split(activity.end) : null;

        console.log(splitSegments);

        // add first half of split segment to internal segments
        if (splitSegments != null && splitSegments[0] != null) { 
            internalSegments.push(splitSegments[0]);
        } else {
            // we ended up in non-segmented time, create a new empty segment 
            const lastSegment = internalSegments.length !== 0 ? internalSegments[internalSegments.length - 1] : null;
            let newSeg = new Segment(lastSegment != null ? lastSegment.end : activity.start, activity.end, 0, 0)
            internalSegments.push(newSeg);
            this.insertSegment(newSeg);
        }

        let newInternalSegments = [];
        for (let i=0 ; i<internalSegments.length ; i++) {
            // replace any generated segments within the body with empty regular segments
            if (internalSegments[i] instanceof GeneratedSegment) {
                let newReplaceSeg = new Segment(internalSegments[i].start, internalSegments[i].end, 0, 0);
                this.replaceSegment(internalSegments[i], newReplaceSeg);
                internalSegments[i] = newReplaceSeg;
            }
            
            // patch any non-segmented time inside the body with new empty segments
            if (i>0 && internalSegments[i-1].end !== internalSegments[i].start) {
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
        console.log(this.segments);
    }

    remove = (activity) => {
        let lastNonRedundant = null;
        for (let i=0 ; i<this.segments.length ; i++) {
            // remove the activity from all segments
            if (this.segments[i].removeActivity(activity)) {
                // merge redundant segments
                if (this.segments[i].isRedundant()) {
                    if (lastNonRedundant instanceof GeneratedSegment) {
                        // we don't need to range extend generated segments because that'll be done automatically
                        // when the segments are recalculated
                        this.segments.splice(i, 1);
                        i--;                
                    } else {
                        // create generated segments in non-segmented space
                        // again, we don't do anything with the initialization of values and let the recalculation do it
                        let newGenSeg = new GeneratedSegment(lastNonRedundant.end, 0, templates.GENERATED_BASELINE, templates.GENERATED_CHANGE_PER_MIN, null);
                        this.replaceSegment(this.segments[i], newGenSeg);
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
            if (this.segments[i].start > segment.start) {
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
        console.log(this.segments);
        for (let i=0 ; i<this.segments.length ; i++) {
            if (i === 0) {
                this.segments[i].startVal = templates.GENERATED_BASELINE;
            } else {
                this.segments[i].recalculate(this.segments[i-1], this.segments[i+1]);
            }
        }
        timelineEvents.Broadcast(timelineEvents.EventType.update, this.getGraphData());
    }

    // returns the one segment that contains time
    // if a segment ends exactly on time, it does not count as containing time, but a segment
    // starting exactly at time is considered as containing time
    getContainingSegment = (time) => {
        for (let i=0 ; i<this.segments.length ; i++) {
            if (this.segments[i].start <= time && this.segments[i].end > time) {
                return this.segments[i];
            }
        }

        return null;
    }

    // returns an array of segments that start after start and end before end
    getFullyContainedSegments = (start, end) => {
        return this.segments.filter((tok) => tok.start >= start && tok.end <= end);
    }

    getNextSegment = (segment) => {
        for (let i=0 ; i<this.segments.length ; i++) {
            if (this.segments[i] === segment) {
                return this.segments[i+1];
            }
        }
        return null;
    }

    getGraphData = () => {
        const outVal = [];
        for (let i=0 ; i<this.segments.length ; i++) {
            outVal.push({
                startTime: this.segments[i].start,
                startVal: this.segments[i].startVal, 
                endTime: this.segments[i].end,
                endVal: this.segments[i].startVal + this.segments[i].getVal()});
        }

        return outVal;
    }

    getGlycationMinutes = (start, finish) => {

    }
}

// to simplify the implementation in visual components, we manage the instance of Timeline here
export const stat = new Timeline();


