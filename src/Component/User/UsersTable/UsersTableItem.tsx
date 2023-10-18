import { useMemo } from 'react'
import { useAppSelector } from "../../../store/hooks/storeHooks"
import { User } from "../../../store/user"
import styled from "styled-components"
import Td from '../../Table/Td'

export default function UserTableItem({ UserClickHandler, user }: { UserClickHandler: any, user: User }) {
    const clickedUserValue = useAppSelector(state => state.clickedUser)

    const clickedStyle = useMemo(() => {
        return clickedUserValue?.id === user.id ? { backgroundColor: '#999999' } : undefined
    }, [clickedUserValue, user])

    return (
        <tr key={user.id} id={user.id.toString()} onClick={(e) => { UserClickHandler(e) }}>
            <Td style={clickedStyle}>{user.id}</Td>
            <Td style={clickedStyle}>{user.name} <SexSpan>{user.sex === 'male' ? '남' : '여'}</SexSpan></Td>
            <Td style={clickedStyle}>{user.phone}</Td>
        </tr>
    )
}
const SexSpan = styled.span`
    font-size: 14px;
`