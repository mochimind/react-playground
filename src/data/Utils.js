
// returns the number of minutes between date1 & date 2
// if date 2 is before date 1, return value will be negative
export const DiffMinutes = (date1, date2) => {
    // converts milliseconds to minutes
    return ((date2 - date1) / 60000);
}

export const AdjustMinutes = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
}

const millisecondsInDay = 24*60*60*1000;
export const DaysBetween = (date1, date2) => {
    return Math.round((date2-date1)/millisecondsInDay);
}

const millisecondsInHour = 60*60*1000;
export const HoursBetween = (date1, date2) => {
    return Math.round((date2-date1)/millisecondsInHour);
}

const millisecondsInMinute = 60*1000;
export const MinutesBetween = (date1, date2) => {
    return Math.round((date2-date1)/millisecondsInMinute);
}

// returns a new Date that is the start of the day in date
export const DayStart = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
}

// returns a new Date that is the end of the day in date
export const DayEnd = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}

