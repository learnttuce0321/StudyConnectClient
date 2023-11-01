import Td from "../../Table/Td";
import { useMemo } from 'react'
import { DateFormater, GetCurrentDate } from "../../../utils/utils";
import { Assignment } from "../../../store/assignment";

export default function UsersAssignmentTableItem({ assignment, index, length }: { assignment: Assignment, index: number, length: number }) {

    const [currentDate] = GetCurrentDate()

    const titleColor = useMemo((): string => {
        const dday = new Date(assignment.deadLine)
        const cday = new Date(currentDate)

        if (dday.getTime() - cday.getTime() > 0) {
            return 'red'
        } else {
            return 'black'
        }
    }, [assignment, currentDate])


    return (
        <tr >
            <Td>{length - index}</Td>
            <Td>{assignment.title} </Td>
            <Td style={{ color: titleColor }}>{DateFormater('yyyy년 MM월 DD일', assignment.deadLine)}</Td>
        </tr>
    )
}