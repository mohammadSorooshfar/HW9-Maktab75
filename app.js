class TimeStamp {
    constructor(year, month, day, hour, minute, second) {
        this.date = new Date(year, month, day);
        this.time = new Time(second,minute,hour);
    }

    toString(format) {
        let formatArr = format.split(' ');
        return `${this.date.toString(formatArr[0])} ${this.time.toString(formatArr[1])}`;
    }

    static compareTimeStamp(timeStamp1, timeStamp2) {
        let dateCompare = Date.compareDate(timeStamp1.date, timeStamp2.date);
        if (dateCompare !== 0) {
            return dateCompare;
        }
        let timeCompare = Time.compareTime(timeStamp1.time, timeStamp2.time);
        if (timeCompare !== 0) {
            return timeCompare;
        }
        return 0;
    }
}

class Date {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    set day(value) {
        if (this.month <= 6 && value <= 31) {
            this._day = value;
        } else if (this.month >= 6 && value <= 30) {
            this._day = value;
        } else {
            console.log("wrong day input");
        }
    }

    get day() {
        return this._day;
    }

    set month(value) {
        if (value <= 12 && value >= 1) {
            this._month = value;
        } else {
            console.log("wrong month input");
        }
    }

    get month() {
        return this._month;
    }

    set year(value) {
        if (value >= 1300 && value <= 1401) {
            this._year = value;
        } else {
            console.log("wrong year input");
        }
    }

    get year() {
        return this._year;
    }

    toString(format) {
        if (format === 'y/m/d') {
            return `${this.year % 100}/${this.month}/${this.day}`;
        } else if (format === 'Y/m/d') {
            return `${this.year}/${this.month}/${this.day}`;
        } else {
            console.log("wrong format!");
        }
    }

    static compareDate(date1, date2) {
        if (date1.year !== date2.year) {
            return date1.year > date2.year ? 1 : -1;
        }
        if (date1.month !== date2.month) {
            return date1.month > date2.month ? 1 : -1;
        }
        if (date1.day !== date2.day) {
            return date1.day > date2.day ? 1 : -1;
        }
        return 0;
    }
}

class Time {
    constructor(second, minute, hour) {
        this.second = second;
        this.minute = minute;
        this.hour = hour;
    }

    set hour(value) {
        if (value >= 0 && value <= 23) {
            this._hour = value;
        } else {
            console.log(value+"wrong hour input");
        }
    }

    get hour() {
        return this._hour;
    }

    set minute(value) {
        if (value <= 59 && value >= 0) {
            this._minute = value;
        } else {
            console.log("wrong minute input");
        }
    }

    get minute() {
        return this._minute;
    }

    set second(value) {
        if (value <= 59 && value >= 0) {
            this._second = value;
        } else {
            console.log("wrong second input");
        }
    }

    get second() {
        return this._second;
    }

    toString(format) {
        let output = "";
        let formatArr = format.split(' ');
        if (formatArr[0] === 'H:i:s') {
            output += `${this.hour}:${this.minute}:${this.second}`;
        } else if (formatArr[0] === 'h:i:s') {
            output += `${this.hour % 12}:${this.minute}:${this.second}`;

        } else if (formatArr[0] === 'H:i') {
            output += `${this.hour}:${this.minute}`;

        } else if (formatArr[0] === 'h:i') {
            output += `${this.hour % 12}:${this.minute}`;
        }
        if (formatArr[1] === 'a') {
            output += ' am'
        } else if (formatArr[1] === 'p') {
            output += ' pm'

        }
    }

    static compareTime(time1, time2) {
        if (time1.hour !== time2.hour) {
            return time1.hour > time2.hour ? 1 : -1;
        }
        if (time1.minute !== time2.minute) {
            return time1.minute > time2.minute ? 1 : -1;
        }
        if (time1.second !== time2.second) {
            return time1.second > time2.second ? 1 : -1;
        }
        return 0;
    }
}

class Event {
    constructor(subject, description, year, month, day, hour, minute, second) {
        this.description = description;
        this.subject = subject;
        this.timeStmp = new TimeStamp(year, month, day, hour, minute, second);
    }
    static compare(event1,event2){
        return TimeStamp.compareTimeStamp(event1.timeStmp,event2.timeStmp);
    }
}

// let date=new Date(1330,7,25);
// let date2=new Date(1330,7,30);
// console.log(Date.compareDate(date,date2));
let listOfEvent = [new Event("eyd", "the eyd of iranian", 1390, 1, 1, 19, 8, 23),
                   new Event("ruz moalem", "the eyd of iranian", 1392, 2, 1, 19, 4, 23),
                   new Event("ramezun", "the eyd of iranian", 1386, 4, 2, 4, 8, 53)];
listOfEvent.sort(Event.compare);
console.log(listOfEvent);