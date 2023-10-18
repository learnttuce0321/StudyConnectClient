import { useMemo } from 'react'
import { useAppSelector } from "../../../store/hooks/storeHooks"
import type { Attendance } from "../../../store/attendance"
import UserAttendnaceTable from "../UserAttendanceTable/UserAttendanceTable"
import styled from "styled-components"


export default function UserAttendanceSummary({ userId }: { userId: number }) {
    const attendanceValue = useAppSelector(state => state.attendance)
    const attendanceRateValue = useAppSelector(state => state.attendaceRate)

    const userAttendances: Array<Attendance> = attendanceValue.filter(attendance => attendance.userId === userId)
    const userAttendanceRate = attendanceRateValue.find(userAttendance => userAttendance.userId === userId)

    const TitleColor = useMemo((): string => {
        const rate = parseInt(userAttendanceRate!.rate)

        if (0 <= rate && rate < 33.3) {
            return 'red'
        } else if (33.3 <= rate && rate < 66.6) {
            return 'black'
        } else {
            return 'blue'
        }
    }, [userAttendanceRate])

    return (
        <div>
            <RateTitle color={TitleColor}>{userAttendanceRate!.rate}% </RateTitle>
            <UserAttendnaceTable userAttendances={userAttendances} />
        </div>
    )
}
interface RateTitleProps {
    color: string
}
const RateTitle = styled.h2<RateTitleProps>`
    color: ${props => props.color};
    margin-bottom: 0.6rem;
`