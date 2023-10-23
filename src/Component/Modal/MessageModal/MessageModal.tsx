import { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks'
import { messageActions, type AddMessagePayload } from '../../../store/message'
import { GetCurrentDate } from '../../../utils/utils'

import type { ModalFunctionProps } from '../ModalWrapper/Modal'
import ModalTextInputItem from '../ModalInputItem/ModalTextInputItem'
import ModalSelectItem from '../ModalInputItem/ModalSelectItem'
import ModalTitle from '../ModalInputItem/ModalTitle'
import ModalContentContainer from '../ModalWrapper/ModalContentContainer'
import ModalButtonsContainer from '../ModalWrapper/ModalButtonsContainer'
import ModalButton from '../ModalInputItem/ModalButton'
import { useParams } from 'react-router-dom'

export default function MessageModal({ ClickQuitHandler }: ModalFunctionProps) {
    const dispatch = useAppDispatch()
    const { studyId }: { studyId: string } = useParams() as { studyId: string }
    const userValue = useAppSelector(state => state.user)

    const contentRef = useRef<HTMLInputElement>(null)
    const userIdRef = useRef<HTMLSelectElement>(null)

    // todos : 이후 삭제
    const tempRef = useRef<HTMLInputElement>(null)

    const ClickSendMessageHandler = (): void => {
        const contentInput = contentRef.current
        const userIdInput = userIdRef.current

        const [date, time] = GetCurrentDate()

        if (userIdInput!.value !== 'none') {
            const AddMessagePayload: AddMessagePayload = {
                content: contentInput!.value,
                userId: userIdInput!.value,
                date,
                time,
                studyId
            }
            dispatch(messageActions.AddMessage(AddMessagePayload))
        }

        ClickQuitHandler()
    }
    return (
        <>
            <ModalContentContainer>
                <ModalTitle>메세지 전송</ModalTitle>
                <ModalTextInputItem name={'메세지'} ref={contentRef} />
                <ModalTextInputItem name={'등등'} ref={tempRef} />
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