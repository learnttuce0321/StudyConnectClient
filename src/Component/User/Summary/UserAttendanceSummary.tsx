import { useMemo } from 'react'
import { useAppSelector } from "../../../store/hooks/storeHooks"
import UserAttendanceTable from "../UserAttendanceTable/UserAttendanceTable"
import styled from "styled-components"
import { AttendanceRate } from '../../../store/attendanceRate'


export default function UserAttendanceSummary() {

    const attendanceRateValue = useAppSelector(state => state.attendaceRate)
    const clickedUserValue = useAppSelector(state => state.clickedUser)

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
            <UserAttendanceTable />
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