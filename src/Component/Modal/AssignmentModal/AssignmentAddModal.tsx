import ModalButton from "../ModalInputItem/ModalButton";
import ModalTextInputItem from "../ModalInputItem/ModalTextInputItem";
import ModalTitle from "../ModalInputItem/ModalTitle";
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer";
import ModalContentContainer from "../ModalWrapper/ModalContentContainer";
import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks';
import { assignmentActions } from '../../../store/assignment';
import { submitActions } from '../../../store/submit';
import { submitRateActions } from '../../../store/submitRate';
import type { AddAssignmentPayload } from '../../../store/assignment';
import type { AddSubmitPayload } from '../../../store/submit';
import type { CalculateAllSubmitRatePayload } from '../../../store/submitRate';
import type { ModalFunctionProps } from "../ModalWrapper/Modal";

export default function AssignmentAddModal({ ClickQuitHandler }: ModalFunctionProps) {

    const dispatch = useAppDispatch()
    const { studyId }: { studyId: string } = useParams() as { studyId: string }
    const userValue = useAppSelector(state => state.user)

    const titleRef = useRef<HTMLInputElement>(null)
    const contentRef = useRef<HTMLInputElement>(null)
    const deadLineRef = useRef<HTMLInputElement>(null)

    const ClickAddAssignmentHandler = async (): Promise<any> => {

        const titleInput = titleRef.current
        const contentInput = contentRef.current
        const deadLineInput = deadLineRef.current
        const id = uuidv4()

        const assignmentResult = await axios({
            method: 'POST',
            url: 'assignment/add',
            data: {
                id,
                title: titleInput!.value,
                content: contentInput!.value,
                deadLine: deadLineInput!.value,
                studyId
            }
        })
        const submitResult = await axios({
            method: 'POST',
            url: 'submit/add-assignment',
            data: {
                users: userValue,
                assignmentId: id,
                studyId
            }
        })
        const submitRateResult = await axios({
            method: 'PATCH',
            url: 'submit-rate/calculate-all',
            data: {
                studyId
            }
        })

        const addAssignmentPayload: AddAssignmentPayload = {
            ...assignmentResult.data.data
        }
        dispatch(assignmentActions.AddAssignment(addAssignmentPayload))

        const addSubmitPayload: AddSubmitPayload = {
            submits: submitResult.data.data
        }
        dispatch(submitActions.AddSubmit(addSubmitPayload))

        const calculateAllSubmitRAtePayload: CalculateAllSubmitRatePayload = {
            submitRates: submitRateResult.data.data
        }
        dispatch(submitRateActions.CalculateAllSubmitRate(calculateAllSubmitRAtePayload))

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
