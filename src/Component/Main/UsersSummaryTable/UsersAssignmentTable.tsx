import Table from "../../Table/Table";
import Talbebody from "../../Table/TableBody";
import TableHead from "../../Table/TableHead";
import TableWrapper from "../../Table/TableWrapper";
import Th from "../../Table/Th";
import { useAppSelector } from "../../../store/hooks/storeHooks";
import UsersAssignmentTableItem from "./UsersAssignmentTableItem";

export default function UsersAssignmentTable() {
    const assignmentValue = useAppSelector(state => state.assignment)
    return (
        <TableWrapper height="50%">
            <Table>
                <TableHead>
                    <Th>과제 번호</Th>
                    <Th>과제 이름</Th>
                    <Th>기한</Th>
                </TableHead>
                <Talbebody>
                    {
                        assignmentValue.slice(0).reverse().map((assignment) => <UsersAssignmentTableItem assignment={assignment} key={assignment.id} />)
                    }
                </Talbebody>
            </Table>
        </TableWrapper>
    )
}