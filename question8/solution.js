function howManyDaysBetweenTwoDates(date1, date2) {
    var onDay = 24*60*60*1000;
    var x = (date2.getTime() - date1.getTime())/onDay;
    return x;
}
module.exports = howManyDaysBetweenTwoDates;