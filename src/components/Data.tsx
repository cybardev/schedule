import { Course } from "./Course";

export const CLASS_DURATION = 75; // in minutes

export const classData = [
    new Course("CSCI-3342", "10:00 AM", ["Tuesday", "Thursday"], "online"),
    new Course("CSCI-3342 REC", "11:30 AM", ["Tuesday, Thursday"], "online"),
    new Course("CSCI-3431", "11:30 AM", ["Monday, Wednesday"], "AT 101"),
    new Course("CSCI-3431 REC", "1:00 PM", ["Monday, Wednesday"], "SB 155"),
    new Course("CSCI-3482", "2:30 PM", ["Tuesday, Thursday"], "ME 105"),
    new Course("CSCI-4301", "5:30 PM", ["Tuesday, Thursday"], "LA 181"),
];
