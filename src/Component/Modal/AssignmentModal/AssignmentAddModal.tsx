import { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks';
import ModalButton from "../ModalInputItem/ModalButton";
import ModalTextInputItem from "../ModalInputItem/ModalTextInputItem";
import ModalTitle from "../ModalInputItem/ModalTitle";
import { ModalFunctionProps } from "../ModalWrapper/Modal";
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer";
import ModalContentContainer from "../ModalWrapper/ModalContentContainer";
import { AddAssignmentPayload, assignmentActions } from '../../../store/assignment';
import { AddSubmitPayload, submitActions } from '../../../store/submit';
import { v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom';

export default function AssignmentAddModal({ ClickQuitHandler }: ModalFunctionProps) {

    const dispatch = useAppDispatch()
    const { studyId }: { studyId: string } = useParams() as { studyId: string }
    const userValue = useAppSelector(state => state.user)

    const titleRef = useRef<HTMLInputElement>(null)
    const contentRef = useRef<HTMLInputElement>(null)
    const deadLineRef = useRef<HTMLInputElement>(null)

    const ClickAddAssignmentHandler = (): void => {

        const titleInput = titleRef.current
        const contentInput = contentRef.current
        const deadLineInput = deadLineRef.current
        const id = uuidv4()

        const addAssignmentPayload: AddAssignmentPayload = {
            id,
            title: titleInput!.value,
            content: contentInput!.value,
            deadLine: deadLineInput!.value,
            studyId
        }
        dispatch(assignmentActions.AddAssignment(addAssignmentPayload))

        const addSubmitPayload: AddSubmitPayload = {
            users: userValue,
            assignmentId: id,
            studyId
        }
        dispatch(submitActions.AddSubmit(addSubmitPayload))

        ClickQuitHandler()
    }
    return (
        <>
            <ModalContentContainer>
                <ModalTitle>과제 추가</ModalTitle>
                <ModalTextInputItem name="이름" ref={titleRef} />
                <ModalTextInputItem name="내용" ref={contentRef} />
                <ModalTextInputItem name="기한" ref={deadLineRef} />
            </ModalContentContainer>
            <ModalButtonsContainer>
                <ModalButton onClick={ClickAddAssignmentHandler}>추가</ModalButton>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
            </ModalButtonsContainer>
        </>
    )
}
