import ModalTextInputItem from "../ModalInputItem/ModalTextInputItem";
import ModalTitle from "../ModalInputItem/ModalTitle";
import ModalContentContainer from "../ModalWrapper/ModalContentContainer";
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer";
import ModalButton from "../ModalInputItem/ModalButton";
import { useRef } from "react";
import { v4 as uuidv4 } from 'uuid'
import axios from "axios";
import { useAppDispatch } from "../../../store/hooks/storeHooks";
import { studyActions } from "../../../store/study";
import type { ModalFunctionProps } from "../ModalWrapper/Modal";
import { SetStudyDataPayload } from "../../../store/study";

export default function StudyAddModal({ ClickQuitHandler }: ModalFunctionProps) {
    const dispatch = useAppDispatch()

    const nameRef = useRef<HTMLInputElement>(null)

    const ClickAddStudyHandler = async (): Promise<any> => {
        const nameInput = nameRef.current
        const id = uuidv4()

        const result = await axios({
            method: 'POST',
            url: '${process.env.REACT_APP_BASE_URL}/add',
            data: {
                id,
                name: nameInput!.value
            }
        })

        if (result.data.result) {
            const payload: SetStudyDataPayload = { studies: result.data.data }
            dispatch(studyActions.SetStudyData(payload))
        }

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