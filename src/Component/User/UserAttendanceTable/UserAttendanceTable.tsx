import { useState, useEffect } from 'react'
import TableWrapper from "../../Table/TableWrapper";
import Table from "../../Table/Table";
import TableHead from "../../Table/TableHead";
import Th from "../../Table/Th";
import Talbebody from "../../Table/TableBody";
import UserAttendanceTableItem from "./UserAttendanceTableItem";

export default function UserAttendnaceTable({ userAttendances }: { userAttendances: any }) {
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