import { Course } from "./Course";
import { classData, CLASS_DURATION } from "./Data";
import { getActiveWeekdays, getTimeSlots } from "./functions";

export function HeaderRow() {
    const row = getActiveWeekdays().map((day) => <th>{day}</th>);
    return (
        <tr>
            <th />
            {row}
        </tr>
    );
}

function Cell({
    course,
    time,
    day,
}: {
    course: Course;
    time: string;
    day: string;
}) {
    return course.start === time && course.days.includes(day) ? (
        <td>
            <p>
                {course.name}
                <br />
                {course.location}
            </p>
        </td>
    ) : (
        <td />
    );
}

export function BodyRow({ startTime }: { startTime: string }) {
    const days: string[] = getActiveWeekdays();
    const endTime: string = new Date(
        Date.parse(`1970/01/01 ${startTime}`) + CLASS_DURATION * 60000
    ).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const dataCells: JSX.Element[] = [];
    // TODO: fix logic
    days.forEach((day) => {
        classData.forEach((course) => {
            dataCells.push(<Cell course={course} time={startTime} day={day} />);
        });
    });
    // classData.forEach((course, index) => {
    //     dataCells.push(
    //         <Cell
    //             course={course}
    //             time={startTime}
    //             day={days[dataCells.length]}
    //         />
    //     );
    // });
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
