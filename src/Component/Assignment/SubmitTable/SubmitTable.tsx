import { useAppSelector } from "../../../store/hooks/storeHooks";
import { Submit } from "../../../store/submit";
import Table from "../../Table/Table";
import Talbebody from "../../Table/TableBody";
import TableHead from "../../Table/TableHead";
import TableWrapper from "../../Table/TableWrapper";
import Th from "../../Table/Th";
import SubmitTableItem from "./SubmitTableItem";

export default function SubmitTable() {
    const userValue = useAppSelector(state => state.user)
    const assignmentValue = useAppSelector(state => state.assignment)
    const submitValue = useAppSelector(state => state.submit)

    const MatchedTableItem = (AassignmentId: number, SassignmentId: number, submit: Submit): (JSX.Element | undefined | null) => {
        switch (AassignmentId === SassignmentId) {
            case true:
                return <SubmitTableItem submit={submit} key={submit.id} />
            case false:
                return null
        }
    }

    return (
        <TableWrapper height="90%">
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
                        assignmentValue.slice(0).reverse().map(assignment => {
                            return (
                                <tr key={assignment.id}>
                                    <Th>{assignment.title}</Th>
                                    {
                                        submitValue.map(submit =>
                                            MatchedTableItem(assignment.id, submit.assignmentId, submit)
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
