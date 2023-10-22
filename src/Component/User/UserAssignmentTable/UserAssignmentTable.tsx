import { useState, useEffect } from 'react';
import TableWrapper from "../../Table/TableWrapper";
import Table from '../../Table/Table';
import Th from '../../Table/Th';
import TableHead from '../../Table/TableHead';
import Talbebody from '../../Table/TableBody';
import UserAssignmentTableItem from './UserAssignmentTableItem';

export default function UserAssignmentTable({ userSubmits }: { userSubmits: any }) {
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
                        userSubmits.slice(0).reverse().map((userSubmit: any) => <UserAssignmentTableItem userSubmit={userSubmit} key={userSubmit.id} />)
                    }
                </Talbebody>
            </Table>
        </TableWrapper>
    )
}