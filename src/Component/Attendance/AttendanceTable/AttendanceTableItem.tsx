import { useAppDispatch } from "../../../store/hooks/storeHooks"
import { attendanceActions } from "../../../store/attendance"
import type { Attendance, ChangeAttendancePayload } from "../../../store/attendance"
import Td from "../../Table/Td"

export default function AttendanceTableItem({ attendance }: { attendance: Attendance }) {
    const dispatch = useAppDispatch()

    const AttendClickHandler = (): void => {
        const payload: ChangeAttendancePayload = {
            scheduleId: attendance.scheduleId,
            userId: attendance.userId
        }
        dispatch(attendanceActions.checkAttendance(payload))
    }

    return (
        <Td key={attendance.userId}>
            <input type="checkbox" onChange={AttendClickHandler} checked={attendance.isAttended} />
        </Td>
    )
}