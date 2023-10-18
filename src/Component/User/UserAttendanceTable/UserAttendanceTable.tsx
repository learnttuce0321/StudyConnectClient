import { Attendance } from "../../../store/attendance";
import TableWrapper from "../../Table/TableWrapper";
import Table from "../../Table/Table";
import TableHead from "../../Table/TableHead";
import Th from "../../Table/Th";
import Talbebody from "../../Table/TableBody";
import UserAttendanceTableItem from "./UserAttendanceTableItem";

export default function UserAttendnaceTable({ userAttendances }: { userAttendances: Array<Attendance> }) {

    return (
        <TableWrapper height="40%">
            <Table>
                <TableHead>
                    <Th>이름</Th>
                    <Th>날짜</Th>
                    <Th>출석</Th>
                </TableHead>
                <Talbebody>
                    {
                        userAttendances.slice(0).reverse().map(userAttendance => {
                            return (
                                <UserAttendanceTableItem userAttendance={userAttendance} key={userAttendance.id} />
                            )
                        })
                    }
                </Talbebody>
            </Table>
        </TableWrapper>
    )
}