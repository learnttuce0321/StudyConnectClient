import TableWrapper from "../../Table/TableWrapper";
import Table from "../../Table/Table";
import TableHead from "../../Table/TableHead";
import Th from "../../Table/Th";
import Talbebody from "../../Table/TableBody";
import UserAttendanceTableItem from "./UserAttendanceTableItem";
import { useState, useEffect } from 'react'
import { useAppSelector } from '../../../store/hooks/storeHooks';
import type { Attendance } from '../../../store/attendance';
import type { Schedule } from '../../../store/schedule';
import type { User } from '../../../store/user';

export default function UserAttendanceTable() {

    const scheduleValue = useAppSelector(state => state.schedule)
    const attendanceValue = useAppSelector(state => state.attendance)
    const clickedUserValue = useAppSelector(state => state.clickedUser)

    const userAttendances: any = GetUserAttendances(attendanceValue, scheduleValue, clickedUserValue)

    const [tableHeight, setTableHeight] = useState<string>(window.innerWidth >= 1180 ? '58%' : '52%')

    useEffect(() => {
        window.addEventListener('resize', () => { setTableHeight(window.innerWidth >= 1180 ? '58%' : '52%') })
        return () => {
            window.removeEventListener('resize', () => { setTableHeight(window.innerWidth >= 1180 ? '58%' : '52%') })
        }
    }, [])

    return (
        <TableWrapper height={tableHeight}>
            <Table>
                <TableHead>
                    <Th>이름</Th>
                    <Th>날짜</Th>
                    <Th>출석</Th>
                </TableHead>
                <Talbebody>
                    {
                        userAttendances.slice(0).reverse().map((userAttendance: any) => <UserAttendanceTableItem userAttendance={userAttendance} key={userAttendance.scheduleId + userAttendances.userId} />)
                    }
                </Talbebody>
            </Table>
        </TableWrapper>
    )
}

const GetUserAttendances = (attendanceValue: Array<Attendance>, scheduleValue: Array<Schedule>, clickedUserValue: User): any => {
    const tempUserAttendances: Array<Attendance> = attendanceValue.filter(attendance => attendance.userId === clickedUserValue.id)
    const returnValue: any = []

    for (let userAttendance of tempUserAttendances) {
        const matchedScheduleObj = scheduleValue.find(schedule => schedule.id === userAttendance.scheduleId)

        const tempAttendance = { ...userAttendance, date: matchedScheduleObj!.date, name: matchedScheduleObj!.name }
        returnValue.push(tempAttendance)
    }
    return returnValue
}