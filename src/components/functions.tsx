import { classData } from "./Data";

// TODO: find sorted time slots (rows of table)
export function getTimeSlots() {
    let timeSlots: string[] = [];
    classData.forEach((el) => {
        if (!timeSlots.includes(el.start)) {
            timeSlots.push(el.start);
        }
    });
    timeSlots.sort(
        (a, b) => Date.parse("1970/01/01 " + a) - Date.parse("1970/01/01 " + b)
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
    return activeWeekdays;
}
