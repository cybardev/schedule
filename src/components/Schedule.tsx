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
    const table = (
        <table>
            <HeaderRow />
            {rows}
        </table>
    );
    return (
        <table>
            <tr>
                <th></th>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
            </tr>
            <tr>
                <th>
                    10:00 am
                    <br />
                    11:15 am
                </th>
                <td></td>
                <td>
                    CSCI 3342
                    <br />
                    online
                </td>
                <td></td>
                <td>
                    CSCI 3342
                    <br />
                    online
                </td>
            </tr>
            <tr>
                <th>
                    11:30 am
                    <br />
                    12:45 pm
                </th>
                <td>
                    CSCI 3431
                    <br />
                    AT 101
                </td>
                <td>
                    CSCI 3342 R<br />
                    online
                </td>
                <td>
                    CSCI 3431
                    <br />
                    AT 101
                </td>
                <td></td>
            </tr>
            <tr>
                <th>
                    1:00 pm
                    <br />
                    2:15 pm
                </th>
                <td>
                    CSCI 3431 RA
                    <br />
                    SB 155
                </td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <th>
                    2:30 pm
                    <br />
                    3:45 pm
                </th>
                <td></td>
                <td>
                    CSCI 3482
                    <br />
                    ME 105
                </td>
                <td></td>
                <td>
                    CSCI 3482
                    <br />
                    ME 105
                </td>
            </tr>
            <tr>
                <th>
                    5:30 pm
                    <br />
                    6:45 pm
                </th>
                <td></td>
                <td>
                    CSCI 4301
                    <br />
                    LA 181
                </td>
                <td></td>
                <td>
                    CSCI 4301
                    <br />
                    LA 181
                </td>
            </tr>
        </table>
    );
}
