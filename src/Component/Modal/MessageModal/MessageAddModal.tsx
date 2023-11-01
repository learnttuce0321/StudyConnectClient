import ModalTextInputItem from '../ModalInputItem/ModalTextInputItem'
import ModalSelectItem from '../ModalInputItem/ModalSelectItem'
import ModalTitle from '../ModalInputItem/ModalTitle'
import ModalContentContainer from '../ModalWrapper/ModalContentContainer'
import ModalButtonsContainer from '../ModalWrapper/ModalButtonsContainer'
import ModalButton from '../ModalInputItem/ModalButton'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks'
import { GetCurrentDate } from '../../../utils/utils'
import { messageActions } from '../../../store/message'
import type { AddMessagePayload } from '../../../store/message'
import type { ModalFunctionProps } from '../ModalWrapper/Modal'

export default function MessageAddModal({ ClickQuitHandler }: ModalFunctionProps) {
    const dispatch = useAppDispatch()
    const { studyId }: { studyId: string } = useParams() as { studyId: string }
    const userValue = useAppSelector(state => state.user)

    const contentRef = useRef<HTMLInputElement>(null)
    const userIdRef = useRef<HTMLSelectElement>(null)


    const ShareKakao = (userId: string, content: string): void => {
        const matchedUserObj = userValue.find(user => user.id === userId)

        window.Kakao.Link.sendCustom({
            templateId: 100158,
            templateArgs: {
                userName: `${matchedUserObj!.name}`,
                content: `${content}`
            }
        })
    }

    const ClickSendMessageHandler = async (): Promise<any> => {
        const contentInput = contentRef.current
        const userIdInput = userIdRef.current
        const id = uuidv4()

        const [date, time] = GetCurrentDate()

        if (userIdInput!.value !== 'none') {
            const result = await axios({
                method: 'POST',
                url: 'message/add',
                data: {
                    id,
                    content: contentInput!.value,
                    userId: userIdInput!.value,
                    date,
                    time,
                    studyId
                }
            })

            ShareKakao(userIdInput!.value, contentInput!.value)

            if (result.data.result) {
                const AddMessagePayload: AddMessagePayload = {
                    id,
                    content: contentInput!.value,
                    userId: userIdInput!.value,
                    date,
                    time,
                    studyId
                }
                dispatch(messageActions.AddMessage(AddMessagePayload))
            }
        }

        ClickQuitHandler()
    }
    return (
        <>
            <ModalContentContainer>
                <ModalTitle>메세지 전송</ModalTitle>
                <ModalTextInputItem name={'메세지'} ref={contentRef} />
                <ModalSelectItem name={'수신'} ref={userIdRef}>
                    <option value="none">선택</option>
                    {
                        userValue.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                    }
                </ModalSelectItem>
            </ModalContentContainer>

            <ModalButtonsContainer>
                <ModalButton onClick={ClickSendMessageHandler}>보내기</ModalButton>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
            </ModalButtonsContainer>
        </>
    )
}