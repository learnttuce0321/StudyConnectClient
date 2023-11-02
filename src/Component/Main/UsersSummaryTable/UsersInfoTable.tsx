import Table from "../../Table/Table";
import Talbebody from "../../Table/TableBody";
import TableHead from "../../Table/TableHead";
import TableWrapper from "../../Table/TableWrapper";
import Th from "../../Table/Th";
import UsersInfoTableItem from "./UsersInfoTableItem";
import { useAppSelector } from "../../../store/hooks/storeHooks"

export default function UsersInfoTable() {
    const userValue = useAppSelector(state => state.user)

    return (
        <TableWrapper height="50%">
            <Table>
                <TableHead>
                    <Th>이름</Th>
                    <Th>출석률</Th>
                    <Th>과제 제출률</Th>
                </TableHead>
                <Talbebody>
                    {
                        userValue.map((user) => <UsersInfoTableItem user={user} key={user.id} />)
                    }
                </Talbebody>
            </Table>
        </TableWrapper>
    )
}   