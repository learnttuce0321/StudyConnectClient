import { useRef } from 'react'
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks"
import { userActions } from "../../../store/user"
import { clickedUserActions } from "../../../store/clickedUser"
import type { User } from "../../../store/user"
import type { InfoPaylaod } from "../../../store/user"
import type { setClickedUserPayload } from "../../../store/clickedUser"
import styled from "styled-components"
import axios from "axios"

export default function UserInfo() {
    const dispatch = useAppDispatch()

    const clickedUserValue = useAppSelector(state => state.clickedUser)

    const infoRef = useRef<HTMLTextAreaElement>(null)

    const ClickModifyUserInfoHandler = async (): Promise<any> => {
        const infoInput = infoRef.current

        const result = await axios({
            method: 'PATCH',
            url: 'user/modify',
            data: {
                id: clickedUserValue!.id,
                info: infoInput!.value
            }
        })

        if (result.data.result) {
            const userPayload: InfoPaylaod = {
                id: clickedUserValue!.id,
                info: result.data.data.info
            }
            dispatch(userActions.ChangeInfo(userPayload))
        }
    }

    const ChangeUserInfoHandler = (e: any) => {
        const tempUser = { ...clickedUserValue } as User
        tempUser.info = e.target.value

        const clickedUserPayload: setClickedUserPayload = {
            user: tempUser
        }
        console.log(clickedUserPayload)
        dispatch(clickedUserActions.setClickedUser(clickedUserPayload))
    }

    return (
        <UserInfoContainer>
            <div>
                <span style={{ fontSize: '1.2rem' }}>{clickedUserValue.name}/</span>
                <span style={{ fontSize: '1.2rem' }}>{clickedUserValue.sex === 'male' ? '남 ' : '여 '}</span>
                <span style={{ fontSize: '0.9rem' }}>{clickedUserValue.phone}</span>
                <button onClick={ClickModifyUserInfoHandler}>저장하기</button>
            </div>
            <UserInfoInput value={clickedUserValue.info} ref={infoRef} onChange={ChangeUserInfoHandler} />
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