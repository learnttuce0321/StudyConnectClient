import { Assignment } from "../../../store/assignment";
import Td from "../../Table/Td";
import { DateFormater } from "../../../utils/utils";

export default function AssignmentTableItem({ assignment }: { assignment: Assignment }) {
    return (
        <tr>
            <Td>{assignment.id}</Td>
            <Td>{assignment.title}</Td>
            <Td>{assignment.content.length > 5 ? assignment.content.slice(0, 3) + '...' : assignment.content}</Td>
            <Td>{DateFormater('yyyy년 MM월 DD일', assignment.deadLine)}</Td>
        </tr>
    )
}