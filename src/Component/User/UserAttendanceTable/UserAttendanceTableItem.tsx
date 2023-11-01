import Td from "../../Table/Td";
import { DateFormater } from "../../../utils/utils";

export default function UserAttendanceTableItem({ userAttendance }: { userAttendance: any }) {
    return (
        <tr>
            <Td>{userAttendance.name}</Td>
            <Td>{DateFormater('yyyy년 MM월 DD일', userAttendance.date)}</Td>
            <Td>{userAttendance.isAttended ? '참석' : '미참석'}</Td>
        </tr>
    )
}