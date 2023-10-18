import { Attendance } from "../../../store/attendance";
import { DateFormater } from "../../../utils/utils";
import Td from "../../Table/Td";

export default function UserAttendanceTableItem({ userAttendance }: { userAttendance: Attendance }) {
    return (
        <tr>
            <Td>{userAttendance.scheduleId}</Td>
            <Td>{DateFormater('yyyy년 MM월 DD일', userAttendance.date)}</Td>
            <Td>{userAttendance.isAttended ? '참석' : '미참석'}</Td>
        </tr>
    )
}