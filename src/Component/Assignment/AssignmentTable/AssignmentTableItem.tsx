import { Assignment } from "../../../store/assignment";
import Td from "../../Table/Td";
import { DateFormater } from "../../../utils/utils";

export default function AssignmentTableItem({ assignment, index, length }: { assignment: Assignment, index: number, length: number }) {
    return (
        <tr>
            <Td>{length - index}</Td>
            <Td>{assignment.title}</Td>
            <Td>{assignment.content.length > 5 ? assignment.content.slice(0, 3) + '...' : assignment.content}</Td>
            <Td>{DateFormater('yyyy년 MM월 DD일', assignment.deadLine)}</Td>
        </tr>
    )
}