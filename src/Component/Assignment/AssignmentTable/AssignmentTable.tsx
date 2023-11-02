import Table from "../../Table/Table";
import Talbebody from "../../Table/TableBody";
import TableHead from "../../Table/TableHead";
import TableWrapper from "../../Table/TableWrapper";
import Th from "../../Table/Th";
import AssignmentTableItem from "./AssignmentTableItem";
import { useAppSelector } from "../../../store/hooks/storeHooks";

export default function AssignmentTable() {
    const assignmentValue = useAppSelector(state => state.assignment)

    return (
        <TableWrapper height="90%">
            <Table>
                <TableHead>
                    <Th>과제번호</Th>
                    <Th>과제이름</Th>
                    <Th>내용</Th>
                    <Th>기한</Th>
                </TableHead>
                <Talbebody>
                    {
                        assignmentValue.slice(0).reverse().map((assignment, index, arr) => <AssignmentTableItem assignment={assignment} index={index} length={arr.length} key={assignment.id} />)
                    }
                </Talbebody>
            </Table>
        </TableWrapper>
    )
}