import { useRef } from "react";
import ModalTextInputItem from "../ModalInputItem/ModalTextInputItem";
import ModalTitle from "../ModalInputItem/ModalTitle";
import ModalContentContainer from "../ModalWrapper/ModalContentContainer";
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer";
import { ModalFunctionProps } from "../ModalWrapper/Modal";
import ModalButton from "../ModalInputItem/ModalButton";
import { v4 as uuidv4 } from 'uuid'
import { useAppDispatch } from "../../../store/hooks/storeHooks";
import { AddStudyPayload, studyActions } from "../../../store/study";

export default function StudyAddModal({ ClickQuitHandler }: ModalFunctionProps) {

    const dispatch = useAppDispatch()
    const nameRef = useRef<HTMLInputElement>(null)

    const ClickAddStudyHandler = (): void => {
        const nameInput = nameRef.current
        const id = uuidv4()

        const addStudyPayload: AddStudyPayload = {
            id,
            name: nameInput!.value
        }
        dispatch(studyActions.AddStudy(addStudyPayload))

        ClickQuitHandler()
    }
    return (
        <>
            <ModalContentContainer>
                <ModalTitle>스터디 추가</ModalTitle>
                <ModalTextInputItem name="이름" ref={nameRef} />
            </ModalContentContainer>
            <ModalButtonsContainer>
                <ModalButton onClick={ClickAddStudyHandler}>추가</ModalButton>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
            </ModalButtonsContainer>
        </>
    )
}