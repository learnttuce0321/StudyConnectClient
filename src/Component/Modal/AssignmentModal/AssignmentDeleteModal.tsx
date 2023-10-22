import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks'
import ModalButton from "../ModalInputItem/ModalButton"
import ModalSelectItem from "../ModalInputItem/ModalSelectItem"
import ModalTitle from "../ModalInputItem/ModalTitle"
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer"
import ModalContentContainer from "../ModalWrapper/ModalContentContainer"
import { ModalFunctionProps } from '../ModalWrapper/Modal'
import { DeleteAssignmentPayload, assignmentActions } from '../../../store/assignment'
import { DeleteSubmitPayload, submitActions } from '../../../store/submit'

export default function AssignmentDeleteModal({ ClickQuitHandler }: ModalFunctionProps) {

    const dispatch = useAppDispatch()
    const assignmentValue = useAppSelector(state => state.assignment)

    const [selectedAssignmentId, setSelectedAssignmentId] = useState<string>('')
    const ClickAssignmentHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedAssignmentId(e.target!.value)
    }

    const ClickDeleteHandler = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {

            const deleteAssignmentPayload: DeleteAssignmentPayload = {
                id: selectedAssignmentId
            }
            dispatch(assignmentActions.DeleteAssignment(deleteAssignmentPayload))

            const deleteSubmitPayload: DeleteSubmitPayload = {
                assignmentId: selectedAssignmentId
            }
            dispatch(submitActions.DeleteSubmit(deleteSubmitPayload))

            setSelectedAssignmentId('')
            ClickQuitHandler()
        }
    }

    return (
        <>
            <ModalContentContainer>
                <ModalTitle>삭제</ModalTitle>
                <ModalSelectItem name={'일정'} onChange={ClickAssignmentHandler}>
                    <option value={''}>선택</option>
                    {
                        assignmentValue.map(assignment => {
                            return (
                                <option key={assignment.id} value={assignment.id}>{assignment.title}</option>
                            )
                        })
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