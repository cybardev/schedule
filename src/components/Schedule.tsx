import { CLASS_DURATION } from "./Data";
import { getActiveWeekdays, getTimeSlots, getCourseCell } from "./functions";

export function HeaderRow() {
    const row = getActiveWeekdays().map((day) => <th>{day}</th>);
    return (
        <thead>
            <tr>
                <th />
                {row}
            </tr>
        </thead>
    );
}

export function BodyRow({ startTime }: { startTime: string }) {
    const days: string[] = getActiveWeekdays();
    const endTime: string = new Date(
        Date.parse(`1970/01/01 ${startTime}`) + CLASS_DURATION * 60000
    ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const dataCells: JSX.Element[] = [];
    days.forEach((day) => {
        dataCells.push(getCourseCell(startTime, day));
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
            <tbody>{rows}</tbody>
        </table>
    );
}
