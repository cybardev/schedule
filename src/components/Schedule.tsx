import { CLASS_DURATION } from "./Data";
import { getActiveWeekdays, getTimeSlots, getCourseCell } from "./Functions";

export function HeaderRow() {
	const row = getActiveWeekdays().map((day) => <th>{day}</th>);
	return (
		<tr>
			<th />
			{row}
		</tr>
	);
}

export function BodyRow({ startTime }: { startTime: string }) {
	const endTime: string = new Date(
		Date.parse(`1970/01/01 ${startTime}`) + CLASS_DURATION * 60000,
	).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
	const dataCells = getActiveWeekdays().map((day) =>
		getCourseCell(startTime, day),
	);
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
			<thead>
				<HeaderRow />
			</thead>
			<tbody>{rows}</tbody>
		</table>
	);
}
