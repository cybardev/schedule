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
                <p>
                    {this.name}
                    <br />
                    {this.location}
                </p>
            </td>
        );
    }
}
