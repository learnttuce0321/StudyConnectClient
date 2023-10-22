import TableWrapper from "../../Table/TableWrapper"
import Table from "../../Table/Table"
import TableHead from "../../Table/TableHead"
import Talbebody from "../../Table/TableBody"
import { useAppSelector } from "../../../store/hooks/storeHooks"
import { DateFormater } from "../../../utils/utils"
import type { Attendance } from "../../../store/attendance"
import AttendanceTableItem from "./AttendanceTableItem"
import Th from "../../Table/Th"

export default function AttendanceTable() {
    const userValue = useAppSelector(state => state.user)
    const scheduleValue = useAppSelector(state => state.schedule)
    const attendanceValue = useAppSelector(state => state.attendance)

    const MatchedTableItem = (SscheduleId: number, AscheduleId: number, attendance: Attendance): (JSX.Element | null | undefined) => {
        switch (SscheduleId === AscheduleId) {
            case true:
                return <AttendanceTableItem attendance={attendance} key={attendance.id} />
            case false:
                return null
        }

    }
    return (
        <TableWrapper height="100%">
            <Table>
                <TableHead>
                    <Th className="pin">ㅤ</Th>
                    {
                        userValue.map(user => {
                            return (
                                <Th key={user.id}>{user.name}</Th>
                            )
                        })
                    }
                </TableHead>
                <Talbebody>
                    {
                        scheduleValue.slice(0).reverse().map(schedule => {
                            return (
                                <tr key={schedule.id}>
                                    <Th>{DateFormater('yyyy년 MM월 DD일', schedule.date)}</Th>
                                    {
                                        attendanceValue.map(attendance =>
                                            MatchedTableItem(schedule.id, attendance.scheduleId, attendance)
                                        )
                                    }
                                </tr>
                            )
                        })
                    }
                </Talbebody>
            </Table>
        </TableWrapper>
    )
}