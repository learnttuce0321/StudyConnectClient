import ModalButton from "../ModalInputItem/ModalButton"
import ModalSelectItem from "../ModalInputItem/ModalSelectItem"
import ModalTextInputItem from "../ModalInputItem/ModalTextInputItem"
import ModalTitle from "../ModalInputItem/ModalTitle"
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer"
import ModalContentContainer from "../ModalWrapper/ModalContentContainer"
import { useState, useRef } from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks'
import { assignmentActions } from '../../../store/assignment'
import type { Assignment, ModifyAssignmentPayload } from '../../../store/assignment'
import type { ModalFunctionProps } from '../ModalWrapper/Modal'

export default function AssignmentModifyModal({ ClickQuitHandler }: ModalFunctionProps) {
    const assignmentValue = useAppSelector(state => state.assignment)

    const dispatch = useAppDispatch()

    const [selectedAssignment, setSelectedAssignment] = useState<Assignment>()
    const [titleState, setTitleState] = useState<string>('')
    const [contentState, setContentState] = useState<string>('')
    const [deadLineState, setDeadLineState] = useState<string>('')

    const titleRef = useRef<HTMLInputElement>(null)
    const contentRef = useRef<HTMLInputElement>(null)
    const deadLineRef = useRef<HTMLInputElement>(null)

    const ClickAssignmentHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const id = e.target.value

        if (id !== 'none') {
            const selectedAssignmentObj = assignmentValue.find(assignment => assignment.id === id)
            setSelectedAssignment(selectedAssignmentObj)
            setTitleState(selectedAssignmentObj!.title)
            setContentState(selectedAssignmentObj!.content)
            setDeadLineState(selectedAssignmentObj!.deadLine)
        }
    }

    const ClickModifyHandler = async (): Promise<any> => {
        if (window.confirm('수정하시겠습니까?')) {
            const titleInput = titleRef.current
            const contentInput = contentRef.current
            const deadLineInput = deadLineRef.current

            const result = await axios({
                method: 'PATCH',
                url: 'assignment/update',
                data: {
                    id: selectedAssignment!.id,
                    title: titleInput!.value,
                    content: contentInput!.value,
                    deadLine: deadLineInput!.value
                }
            })

            if (result.data.result) {
                const modifyAssignmentPayload: ModifyAssignmentPayload = {
                    ...result.data.data
                }
                dispatch(assignmentActions.ModifyAssignment(modifyAssignmentPayload))
            }

            setSelectedAssignment(undefined)
            setTitleState('')
            setContentState('')
            setDeadLineState('')
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
                            <ModalTextInputItem name="이름" ref={titleRef} onChangeHandler={(e: any): void => { setTitleState(e.target.value) }} value={titleState} />
                            <ModalTextInputItem name="내용" ref={contentRef} onChangeHandler={(e: any): void => { setContentState(e.target.value) }} value={contentState} />
                            <ModalTextInputItem name="기한" ref={deadLineRef} onChangeHandler={(e: any): void => { setDeadLineState(e.target.value) }} value={deadLineState} />

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