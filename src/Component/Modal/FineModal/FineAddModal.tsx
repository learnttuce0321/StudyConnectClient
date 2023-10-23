import { useRef } from 'react'
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks";
import ModalSelectItem from "../ModalInputItem/ModalSelectItem";
import ModalTextInputItem from "../ModalInputItem/ModalTextInputItem";
import ModalTitle from "../ModalInputItem/ModalTitle";
import { ModalFunctionProps } from "../ModalWrapper/Modal";
import ModalContentContainer from "../ModalWrapper/ModalContentContainer";
import { AddFinePayload, fineActions } from '../../../store/fine';
import ModalButtonsContainer from '../ModalWrapper/ModalButtonsContainer';
import ModalButton from '../ModalInputItem/ModalButton';
import { useParams } from 'react-router-dom';

export default function FineAddModal({ ClickQuitHandler }: ModalFunctionProps) {

    const dispatch = useAppDispatch()
    const { studyId }: { studyId: string } = useParams() as { studyId: string }
    const userValue = useAppSelector(state => state.user)

    const userIdRef = useRef<HTMLSelectElement>(null)
    const fineRef = useRef<HTMLInputElement>(null)
    const deadLineRef = useRef<HTMLInputElement>(null)

    const ClickAddFineHandler = (): void => {
        const userIdInput = userIdRef.current
        const fineInput = fineRef.current
        const deadLineInput = deadLineRef.current

        if (userIdInput!.value !== 'none') {
            const addFinePayload: AddFinePayload = {
                userId: userIdInput!.value,
                deadLine: deadLineInput!.value,
                fine: parseInt(fineInput!.value),
                studyId
            }
            dispatch(fineActions.AddFine(addFinePayload))
        }

        ClickQuitHandler()

    }

    return (
        <>
            <ModalContentContainer>
                <ModalTitle>벌금 내역 추가</ModalTitle>
                <ModalSelectItem name={'회원'} ref={userIdRef}>
                    <option value="none">선택</option>
                    {
                        userValue.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
                    }
                </ModalSelectItem>
                <ModalTextInputItem name={"벌금"} ref={fineRef} />
                <ModalTextInputItem name={"기한"} ref={deadLineRef} />

            </ModalContentContainer>

            <ModalButtonsContainer>
                <ModalButton onClick={ClickAddFineHandler}>추가하기</ModalButton>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
            </ModalButtonsContainer>
        </>
    )
}