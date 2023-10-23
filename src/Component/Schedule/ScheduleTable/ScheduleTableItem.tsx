import { Schedule } from "../../../store/schedule";
import Td from "../../Table/Td";

export default function ScheduleTableItem({ schedule, index, length }: { schedule: Schedule, index: number, length: number }) {
    return (
        <tr>
            <Td>{length - index}</Td>
            <Td>{schedule.name}</Td>
            <Td>{schedule.date}</Td>
            <Td>{schedule.time}</Td>
            <Td>{schedule.location}</Td>
        </tr>
    )
}
