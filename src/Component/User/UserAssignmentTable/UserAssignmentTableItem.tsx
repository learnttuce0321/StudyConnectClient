import Td from '../../Table/Td';
import { DateFormater } from "../../../utils/utils";

export default function UserAssignmentTableItem({ userSubmit }: { userSubmit: any }) {
    return (
        <tr>
            <Td>{userSubmit.title}</Td>
            <Td>{DateFormater('yyyy년 MM월 DD일', userSubmit.deadLine)}</Td>
            <Td>{userSubmit.isSubmitted ? '제출' : '미제출'}</Td>
        </tr>
    )
}