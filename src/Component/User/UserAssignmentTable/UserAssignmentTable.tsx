import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks/storeHooks';
import TableWrapper from "../../Table/TableWrapper";
import Table from '../../Table/Table';
import Th from '../../Table/Th';
import TableHead from '../../Table/TableHead';
import Talbebody from '../../Table/TableBody';
import UserAssignmentTableItem from './UserAssignmentTableItem';
import type { Submit } from '../../../store/submit';
import type { Assignment } from '../../../store/assignment';
import type { User } from '../../../store/user';

export default function UserAssignmentTable() {

    const assignmentValue = useAppSelector(state => state.assignment)
    const submitValue = useAppSelector(state => state.submit)
    const clickedUserValue = useAppSelector(state => state.clickedUser)

    const userSubmits: any = GetUserSubmits(submitValue, assignmentValue, clickedUserValue)

    const [tableHeight, setTableHeight] = useState<string>(window.innerWidth >= 1180 ? '64%' : '52%')

    useEffect(() => {
        window.addEventListener('resize', () => { setTableHeight(window.innerWidth >= 1180 ? '64%' : '52%') })
        return () => {
            window.removeEventListener('resize', () => { setTableHeight(window.innerWidth >= 1180 ? '64%' : '52%') })
        }
    }, [])

    return (
        <TableWrapper height={tableHeight}>
            <Table>
                <TableHead>
                    <Th>과제이름</Th>
                    <Th>기한</Th>
                    <Th>제출</Th>
                </TableHead>
                <Talbebody>
                    {
                        userSubmits.slice(0).reverse().map((userSubmit: any) => <UserAssignmentTableItem userSubmit={userSubmit} key={userSubmit.assignmentId + userSubmit.userId} />)
                    }
                </Talbebody>
            </Table>
        </TableWrapper>
    )
}
const GetUserSubmits = (submitValue: Array<Submit>, assignmentValue: Array<Assignment>, clickedUserValue: User): any => {
    const tempUserSubmits: Array<Submit> = submitValue.filter(submit => submit.userId === clickedUserValue.id)
    const returnValue: any = []
    for (let userSubmit of tempUserSubmits) {
        const matchedAssignmentObj = assignmentValue.find(assignment => assignment.id === userSubmit.assignmentId)
        const tempSubmitObj = { ...userSubmit, deadLine: matchedAssignmentObj!.deadLine, title: matchedAssignmentObj!.title }
        returnValue.push(tempSubmitObj)
    }
    return returnValue
}
