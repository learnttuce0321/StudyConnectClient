import { useMemo } from 'react'
import { useAppSelector } from "../../../store/hooks/storeHooks"
import type { Attendance } from "../../../store/attendance"
import UserAttendnaceTable from "../UserAttendanceTable/UserAttendanceTable"
import styled from "styled-components"
import { AttendanceRate } from '../../../store/attendanceRate'


export default function UserAttendanceSummary() {
    const scheduleValue = useAppSelector(state => state.schedule)
    const attendanceValue = useAppSelector(state => state.attendance)
    const attendanceRateValue = useAppSelector(state => state.attendaceRate)
    const clickedUserValue = useAppSelector(state => state.clickedUser)

    const tempUserAttendances: Array<Attendance> = attendanceValue.filter(attendance => attendance.userId === clickedUserValue.id)
    const userAttendances: any = []
    for (let userAttendance of tempUserAttendances) {
        const matchedScheduleObj = scheduleValue.find(schedule => schedule.id === userAttendance.scheduleId)

        const tempAttendance = { ...userAttendance, date: matchedScheduleObj!.date, name: matchedScheduleObj!.name }
        userAttendances.push(tempAttendance)
    }

    const userAttendanceRate: (AttendanceRate | undefined) = attendanceRateValue.find(userAttendance => userAttendance.userId === clickedUserValue.id)

    const titleColor = useMemo((): string => {
        const rate = Number(userAttendanceRate!.rate)

        if (0 <= rate && rate < 33.3) {
            return 'red'
        } else if (33.3 <= rate && rate < 66.6) {
            return 'black'
        } else {
            return 'blue'
        }
    }, [userAttendanceRate])

    return (
        <>
            <RateTitle color={titleColor}>{userAttendanceRate!.rate}% </RateTitle>
            <UserAttendnaceTable userAttendances={userAttendances} />
        </>
    )
}
interface RateTitleProps {
    color: string
}
const RateTitle = styled.h2<RateTitleProps>`
    color: ${props => props.color};
    margin-bottom: 0.6rem;
`