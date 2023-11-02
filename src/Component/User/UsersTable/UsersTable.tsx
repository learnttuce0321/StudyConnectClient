import Table from "../../Table/Table"
import TableHead from "../../Table/TableHead"
import Talbebody from "../../Table/TableBody"
import UserTableItem from "./UsersTableItem"
import TableWrapper from "../../Table/TableWrapper"
import Th from "../../Table/Th"
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks"
import { clickedUserActions } from "../../../store/clickedUser"
import type { SetClickedUserPayload } from "../../../store/clickedUser"

export default function UsersTable() {
    const { filteredUser, isFiltering } = useAppSelector(state => state.filteredUser)
    const userValue = useAppSelector(state => state.user)

    const dispatch = useAppDispatch()

    const UserClickHandler = (e: React.MouseEvent<HTMLElement>): void => {
        const clickedUserId: string = e.currentTarget.id

        const payload: SetClickedUserPayload = {
            user: userValue.find((user) => user.id === clickedUserId)
        }
        dispatch(clickedUserActions.setClickedUser(payload))
    }

    return (
        <TableWrapper height={'100%'}>
            <Table>
                <TableHead>
                    <Th>회원번호</Th>
                    <Th>이름/성</Th>
                    <Th>번호</Th>
                </TableHead>
                {
                    isFiltering ? (
                        <>
                            {
                                filteredUser.length ? (
                                    <Talbebody>
                                        {
                                            filteredUser!.map((user, index) => <UserTableItem UserClickHandler={UserClickHandler} user={user} index={index} key={user.id} />)
                                        }
                                    </Talbebody>
                                ) : (
                                    <Talbebody>
                                        <tr>
                                            <th></th>
                                            <th>검색결과가 존재하지 않습니다.</th>
                                            <th></th>
                                        </tr>
                                    </Talbebody>
                                )
                            }
                        </>

                    ) : (
                        <Talbebody>
                            {
                                userValue.map((user, index) => <UserTableItem UserClickHandler={UserClickHandler} user={user} index={index} key={user.id} />)
                            }
                        </Talbebody>
                    )
                }
            </Table>
        </TableWrapper>
    )
}

