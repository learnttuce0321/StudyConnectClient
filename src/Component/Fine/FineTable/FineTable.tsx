import Table from "../../Table/Table";
import Talbebody from "../../Table/TableBody";
import TableHead from "../../Table/TableHead";
import TableWrapper from "../../Table/TableWrapper";
import Th from "../../Table/Th";
import FineTableItem from "./FineTableItem";
import { useAppSelector } from "../../../store/hooks/storeHooks";
import type { Fine } from "../../../store/fine";
import type { User } from "../../../store/user";

export default function FineTable() {
    const fineValue = useAppSelector(state => state.fine)
    const userValue = useAppSelector(state => state.user)

    const userFines = GetUserFines(userValue, fineValue)

    return (
        <TableWrapper height="100%">
            <Table>
                <TableHead>
                    <Th>번호</Th>
                    <Th>회원이름</Th>
                    <Th>벌금</Th>
                    <Th>기한</Th>
                    <Th>제출 유무</Th>
                </TableHead>
                <Talbebody>
                    {
                        userFines.slice(0).reverse().map(((userFine: any, index: number, arr: any) => <FineTableItem userFine={userFine} index={index} length={arr.length} key={userFine.id + userFine.userId} />))
                    }
                </Talbebody>
            </Table>
        </TableWrapper>
    )
}

/**
 * 벌금 내역의 userId와 회원의 id를 비교하여 이름을 받아오는 함수
 * @param userValue 
 * @param fineValue 
 * @returns fineObj + name_property
 */
const GetUserFines = (userValue: Array<User>, fineValue: Array<Fine>): any => {
    const returnValue: any = fineValue.map(fine => {
        const matchedUserObj = userValue.find(user => user.id === fine.userId)
        return { ...fine, name: matchedUserObj!.name }
    })

    return returnValue
}