import Table from "../../Table/Table";
import TableHead from "../../Table/TableHead";
import Talbebody from "../../Table/TableBody";
import TableWrapper from "../../Table/TableWrapper";
import Th from "../../Table/Th";
import UsersAssignmentTableItem from "./UsersAssignmentTableItem";
import { useAppSelector } from "../../../store/hooks/storeHooks";

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
                        assignmentValue.slice(0).reverse().map((assignment, index, arr) => <UsersAssignmentTableItem assignment={assignment} index={index} length={arr.length} key={assignment.id} />)
                    }
                </Talbebody>
            </Table>
        </TableWrapper>
    )
}