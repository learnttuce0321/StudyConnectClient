import { useAppDispatch } from "../../../store/hooks/storeHooks"
import { attendanceActions } from "../../../store/attendance"
import type { Attendance, CheckAttendancePayload } from "../../../store/attendance"
import Td from "../../Table/Td"
import styled from "styled-components"

export default function AttendanceTableItem({ attendance }: { attendance: Attendance }) {
    const dispatch = useAppDispatch()

    const AttendClickHandler = (): void => {
        const payload: CheckAttendancePayload = {
            scheduleId: attendance.scheduleId,
            userId: attendance.userId
        }
        dispatch(attendanceActions.checkAttendance(payload))
    }

    return (
        <Td key={attendance.userId}>
            <Item type="checkbox" onChange={AttendClickHandler} id={attendance.scheduleId + attendance.userId} checked={attendance.isAttended} />
            <label htmlFor={attendance.scheduleId + attendance.userId} />
        </Td>
    )
}

const Item = styled.input`
    &{
        display: none;
      }
    & + label{
        display: inline-block;
        width: 1rem;
        height: 1rem;
        border:3px solid #adacac;
        position: relative;
      }
    &:checked + label:after{
        content:'✔';
        font-size: 1.2rem;
        width: 1;
        height: 1.2rem;
        text-align: center;
        position: absolute;
        left: -1px;
        top: -10px;
        color: #4285f4;
        z-index: 2;
      }
`