import { classData } from "./Data";
import { Course } from "./Course";

function daySort(a: string, b: string) {
    type Days = {
        [index: string]: number;
    };
    const orderMap = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ].reduce((accum: Days, val: string, i: number) => {
        accum[val] = i;
        return accum;
    }, {});
    return orderMap[a] - orderMap[b];
}

export function getTimeSlots() {
    let timeSlots: string[] = [];
    classData.forEach((el) => {
        if (!timeSlots.includes(el.start)) {
            timeSlots.push(el.start);
        }
    });
    timeSlots.sort(
        (a, b) => Date.parse(`1970/01/01 ${a}`) - Date.parse(`1970/01/01 ${b}`)
    );
    return timeSlots;
}

export function getActiveWeekdays() {
    let activeWeekdays: string[] = [];
    classData.forEach((el) => {
        el.days.forEach((day) => {
            if (!activeWeekdays.includes(day)) {
                activeWeekdays.push(day);
            }
        });
    });
    activeWeekdays.sort(daySort);
    return activeWeekdays;
}

export function getCourse(time: string, day: string) {
    let crsSet: boolean = false;
    let crs: Course = new Course("", "", [""], "");
    classData.forEach((course) => {
        if (course.start === time && course.days.includes(day)) {
            crs = course;
            crsSet = true;
            return;
        }
    });
    return crsSet ? crs.cell : <td></td>;
}
