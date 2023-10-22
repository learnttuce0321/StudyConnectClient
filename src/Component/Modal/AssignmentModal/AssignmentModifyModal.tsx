import { useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks'
import ModalButton from "../ModalInputItem/ModalButton"
import ModalSelectItem from "../ModalInputItem/ModalSelectItem"
import ModalTextInputItem from "../ModalInputItem/ModalTextInputItem"
import ModalTitle from "../ModalInputItem/ModalTitle"
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer"
import ModalContentContainer from "../ModalWrapper/ModalContentContainer"
import { Assignment, ModifyAssignmentPayload, assignmentActions } from '../../../store/assignment'
import { ModalFunctionProps } from '../ModalWrapper/Modal'

export default function AssignmentModifyModal({ ClickQuitHandler }: ModalFunctionProps) {
    const dispatch = useAppDispatch()
    const assignmentValue = useAppSelector(state => state.assignment)

    const [selectedAssignment, setSelectedAssignment] = useState<Assignment>()

    const titleRef = useRef<HTMLInputElement>(null)
    const contentRef = useRef<HTMLInputElement>(null)
    const deadLineRef = useRef<HTMLInputElement>(null)

    const ClickAssignmentHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const id = e.target.value

        if (id !== 'none') {
            const selectedAssignmentObj = assignmentValue.find(assignment => assignment.id === id)
            setSelectedAssignment(selectedAssignmentObj)
        }
    }

    const ClickModifyHandler = (): void => {
        if (window.confirm('수정하시겠습니까?')) {
            const titleInput = titleRef.current
            const contentInput = contentRef.current
            const deadLineInput = deadLineRef.current

            const modifyAssignmentPayload: ModifyAssignmentPayload = {
                id: selectedAssignment!.id,
                title: titleInput!.value,
                content: contentInput!.value,
                deadLine: deadLineInput!.value
            }
            dispatch(assignmentActions.ModifyAssignment(modifyAssignmentPayload))

            setSelectedAssignment(undefined)
            ClickQuitHandler()
        }
    }
    return (
        <>
            <ModalContentContainer>
                <ModalTitle>수정</ModalTitle>
                <ModalSelectItem name={"일정"} onChange={ClickAssignmentHandler}>
                    <option value={'none'}>선택</option>
                    {
                        assignmentValue.map(assignment => {
                            return (
                                <option key={assignment.id} value={assignment.id}>{assignment.title}</option>
                            )
                        })
                    }
                </ModalSelectItem>
                {
                    selectedAssignment ? (
                        <>
                            <ModalTextInputItem name="이름" ref={titleRef} defaultValue={selectedAssignment!.title} />
                            <ModalTextInputItem name="내용" ref={contentRef} defaultValue={selectedAssignment!.content} />
                            <ModalTextInputItem name="기한" ref={deadLineRef} defaultValue={selectedAssignment!.deadLine} />

                        </>
                    ) : null
                }
            </ModalContentContainer>
            <ModalButtonsContainer>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
                {
                    selectedAssignment ? <ModalButton onClick={ClickModifyHandler}>수정하기</ModalButton> : null
                }
            </ModalButtonsContainer>
        </>
    )
}