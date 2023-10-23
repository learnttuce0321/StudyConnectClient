import Td from "../../Table/Td"
import { useMemo } from 'react'
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks"
import { clickedUserActions } from "../../../store/clickedUser"
import type { User } from "../../../store/user"
import type { setClickedUserPayload } from "../../../store/clickedUser"

export default function UsersInfoTableItem({ user }: { user: User }) {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const attendanceRateValue = useAppSelector(state => state.attendaceRate)
    const userAttendanceRate = attendanceRateValue.find(userAttendance => userAttendance.userId === user.id)
    const submitRateValue = useAppSelector(state => state.submitRate)
    const usersubmitRate = submitRateValue.find(usersubmit => usersubmit.userId === user.id)

    const attendanceColor = useMemo((): string => {
        const rate = Number(userAttendanceRate?.rate)
        if (0 <= rate && rate < 50) {
            return 'red'
        } else if (50 <= rate && rate < 80) {
            return 'black'
        } else {
            return 'blue'
        }
    }, [userAttendanceRate])

    const submitColor = useMemo((): string => {
        const rate = Number(usersubmitRate?.rate)
        if (0 <= rate && rate < 50) {
            return 'red'
        } else if (50 <= rate && rate < 80) {
            return 'black'
        } else {
            return 'blue'
        }
    }, [usersubmitRate])

    const ClickWatchUserLogHandler = (user: User) => {
        const payload: setClickedUserPayload = { user }
        dispatch(clickedUserActions.setClickedUser(payload))
        navigate('/user')
    }

    return (
        <tr onClick={() => { ClickWatchUserLogHandler(user) }}>
            <Td>{user.name}</Td>
            <Td style={{ color: attendanceColor }}>{userAttendanceRate?.rate}% </Td>
            <Td style={{ color: submitColor }}>{usersubmitRate?.rate}%</Td>
        </tr>
    )
}