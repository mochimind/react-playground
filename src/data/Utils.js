
// returns the number of minutes between date1 & date 2
// if date 2 is before date 1, return value will be negative
export const DiffMinutes = (date1, date2) => {
    // converts milliseconds to minutes
    return ((date2 - date1) / 60000);
}

export const AdjustMinutes = (date, minutes) => {
    return new Date(date.getTime() + minutes * 60000);
}