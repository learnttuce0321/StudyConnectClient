import ModalButton from "../ModalInputItem/ModalButton"
import ModalSelectItem from "../ModalInputItem/ModalSelectItem"
import ModalTitle from "../ModalInputItem/ModalTitle"
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer"
import ModalContentContainer from "../ModalWrapper/ModalContentContainer"
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks'
import { assignmentActions } from '../../../store/assignment'
import { submitActions } from '../../../store/submit'
import { submitRateActions } from '../../../store/submitRate'
import type { ModalFunctionProps } from '../ModalWrapper/Modal'
import type { DeleteAssignmentPayload } from '../../../store/assignment'
import type { DeleteSubmitPayload } from '../../../store/submit'
import type { CalculateAllSubmitRatePayload } from '../../../store/submitRate'

export default function AssignmentDeleteModal({ ClickQuitHandler }: ModalFunctionProps) {

    const dispatch = useAppDispatch()
    const assignmentValue = useAppSelector(state => state.assignment)
    const { studyId } = useParams()

    const [selectedAssignmentId, setSelectedAssignmentId] = useState<string>('')
    const ClickAssignmentHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedAssignmentId(e.target!.value)
    }

    const ClickDeleteHandler = async (): Promise<any> => {
        if (window.confirm('정말 삭제하시겠습니까?')) {
            const result = await axios({
                method: 'DELETE',
                url: 'assignment/delete',
                data: {
                    id: selectedAssignmentId
                }
            })
            const submitRateResult = await axios({
                method: 'PATCH',
                url: 'submit-rate/calculate-all',
                data: {
                    studyId
                }
            })

            if (result.data.result) {
                const deleteAssignmentPayload: DeleteAssignmentPayload = {
                    id: selectedAssignmentId
                }
                dispatch(assignmentActions.DeleteAssignment(deleteAssignmentPayload))

                const deleteSubmitPayload: DeleteSubmitPayload = {
                    assignmentId: selectedAssignmentId
                }
                dispatch(submitActions.DeleteSubmit(deleteSubmitPayload))

                const calculateAllSubmitRAtePayload: CalculateAllSubmitRatePayload = {
                    submitRates: submitRateResult.data.data
                }
                dispatch(submitRateActions.CalculateAllSubmitRate(calculateAllSubmitRAtePayload))
            }
        }

        setSelectedAssignmentId('')
        ClickQuitHandler()
    }

    return (
        <>
            <ModalContentContainer>
                <ModalTitle>삭제</ModalTitle>
                <ModalSelectItem name={'일정'} onChange={ClickAssignmentHandler}>
                    <option value={''}>선택</option>
                    {
                        assignmentValue.map(assignment => <option key={assignment.id} value={assignment.id}>{assignment.title}</option>)
                    }
                </ModalSelectItem>
            </ModalContentContainer >

            <ModalButtonsContainer>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
                {
                    selectedAssignmentId.trim().length ? <ModalButton onClick={ClickDeleteHandler}>삭제하기</ModalButton> : null
                }
            </ModalButtonsContainer>
        </>
    )
}