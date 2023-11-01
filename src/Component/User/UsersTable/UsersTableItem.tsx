import Td from '../../Table/Td'
import styled from "styled-components"
import { useMemo } from 'react'
import { useAppSelector } from "../../../store/hooks/storeHooks"
import { User } from "../../../store/user"

export default function UserTableItem({ UserClickHandler, user, index }: { UserClickHandler: any, user: User, index: number }) {
    const clickedUserValue = useAppSelector(state => state.clickedUser)

    const clickedStyle = useMemo(() => {
        return clickedUserValue?.id === user.id ? { backgroundColor: '#999999' } : undefined
    }, [clickedUserValue, user])

    return (
        <tr key={user.id} id={user.id} onClick={(e) => { UserClickHandler(e) }}>
            <Td style={clickedStyle}>{index + 1}</Td>
            <Td style={clickedStyle}>{user.name} <SexSpan>{user.sex === 'male' ? '남' : '여'}</SexSpan></Td>
            <Td style={clickedStyle}>{user.phone}</Td>
        </tr>
    )
}
const SexSpan = styled.span`
    font-size: 14px;
`