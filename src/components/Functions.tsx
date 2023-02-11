import { classData } from "./Data";

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
        (a, b) => Date.parse(`1970/01/01 ${a}`) - Date.parse(`1970$01/01 ${b}`)
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

export function getCourseCell(time: string, day: string) {
    let course = classData.filter(
        (crs) => crs.start === time && crs.days.includes(day)
    );
    return course.length > 0 ? course[0].cell : <td />;
}
