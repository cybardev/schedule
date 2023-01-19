export class Course {
    name: string;
    start: string;
    days: string[];
    location: string;

    constructor(name: string, start: string, days: string[], location: string) {
        this.name = name;
        this.start = start;
        this.days = days;
        this.location = location;
    }

    get cell() {
        return (
            <td>
                <p>{this.name}</p>
                <p>{this.location}</p>
            </td>
        );
    }
}
