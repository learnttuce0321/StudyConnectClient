import Td from "../../Table/Td"
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

    const ClickWatchUserLogHandler = (user: User) => {
        const payload: setClickedUserPayload = { user }
        dispatch(clickedUserActions.setClickedUser(payload))
        navigate('/user')
    }

    return (
        <tr onClick={() => { ClickWatchUserLogHandler(user) }}>
            <Td>{user.name}</Td>
            <Td>{userAttendanceRate!.rate}% </Td>
            <Td>{user.submissionRate}%</Td>
        </tr>
    )
}