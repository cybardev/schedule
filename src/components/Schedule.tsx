import { classData, CLASS_DURATION } from "./Data";
import { getActiveWeekdays, getTimeSlots } from "./functions";

export function HeaderRow() {
    const row = getActiveWeekdays().map((day) => <th>{day}</th>);
    return (
        <tr>
            <th></th>
            {row}
        </tr>
    );
}

// TODO: rows: for slot in time slots: <th>slot</th> <td>class at that slot on that day</td>
export function BodyRow({ startTime }: { startTime: string }) {
    const endTime: string = new Date(
        Date.parse(startTime) + CLASS_DURATION * 60000
    ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const dataCells: JSX.Element[] = [];
    // TODO: fix logic
    classData.forEach((course) => {
        if (course.start === startTime) {
            dataCells.push(course.cell);
        } else {
            dataCells.push(<td></td>);
        }
    });
    return (
        <tr>
            <th>
                {startTime}
                <br />
                {endTime}
            </th>
            {dataCells}
        </tr>
    );
}

export function Schedule() {
    const rows = getTimeSlots().map((slot) => <BodyRow startTime={slot} />);
    return (
        <table>
            <HeaderRow />
            {rows}
        </table>
    );
}
