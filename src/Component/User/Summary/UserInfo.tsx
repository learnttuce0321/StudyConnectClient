import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks"
import { userActions } from "../../../store/user"
import { clickedUserActions } from "../../../store/clickedUser"
import type { User } from "../../../store/user"
import type { InfoPaylaod } from "../../../store/user"
import type { setClickedUserPayload } from "../../../store/clickedUser"
import styled from "styled-components"

export default function UserInfo() {
    const dispatch = useAppDispatch()

    const clickedUserValue = useAppSelector(state => state.clickedUser)

    const ChangeUserInfoHandler = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {

        const userPayload: InfoPaylaod = { id: clickedUserValue!.id, info: e.target.value }
        dispatch(userActions.ChangeInfo(userPayload))

        const tempUser = { ...clickedUserValue } as User
        tempUser.info = e.target.value
        const clickedUserPayload: setClickedUserPayload = {
            user: tempUser
        }
        dispatch(clickedUserActions.setClickedUser(clickedUserPayload))
    }

    return (
        <UserInfoContainer>
            <div>
                <span style={{ fontSize: '1.2rem' }}>{clickedUserValue.name}/</span>
                <span style={{ fontSize: '1.2rem' }}>{clickedUserValue.sex === 'male' ? '남 ' : '여 '}</span>
                <span style={{ fontSize: '0.9rem' }}>{clickedUserValue.phone}</span>
            </div>
            <UserInfoInput value={clickedUserValue.info} onChange={(e) => { ChangeUserInfoHandler(e) }} />
        </UserInfoContainer>
    )
}

const UserInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const UserInfoInput = styled.textarea`
    width: 100%;
    height: 8rem;
    padding: 0.7rem;
    border: 1px solid #282828;
    border-radius: 5px;
    margin: 0.3rem 0;
`