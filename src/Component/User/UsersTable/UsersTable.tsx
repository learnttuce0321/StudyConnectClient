import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks"
import { clickedUserActions } from "../../../store/clickedUser"
import type { setClickedUserPayload } from "../../../store/clickedUser"
import Table from "../../Table/Table"
import TableHead from "../../Table/TableHead"
import Talbebody from "../../Table/TableBody"
import UserTableItem from "./UsersTableItem"
import TableWrapper from "../../Table/TableWrapper"
import Th from "../../Table/Th"

export default function UsersTable() {

    const dispatch = useAppDispatch()
    const { filteredUser, isFiltering } = useAppSelector(state => state.filteredUser)
    const userValue = useAppSelector(state => state.user)

    const UserClickHandler = (e: React.MouseEvent<HTMLElement>): void => {
        const clickedUserId: number = Number(e.currentTarget.id)
        const payload: setClickedUserPayload = {
            user: userValue.find((user) => user.id === clickedUserId)
        }
        dispatch(clickedUserActions.setClickedUser(payload))
    }

    // const tableHeight: string = window.innerWidth >= 1180 ? "100%" : "20%"

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
                                            filteredUser!.map((user) => <UserTableItem UserClickHandler={UserClickHandler} user={user} key={user.id} />)
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
                                userValue.map((user) => <UserTableItem UserClickHandler={UserClickHandler} user={user} key={user.id} />)
                            }
                        </Talbebody>
                    )
                }
            </Table>
        </TableWrapper>
    )
}

