import Td from "../../Table/Td";
import { DateFormater } from "../../../utils/utils";
import { clickedAssignmentActions } from "../../../store/clickedAssignment";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks";
import { ModalState, modalActions } from "../../../store/modal";
import type { SetClickedAssignmentPayload } from "../../../store/clickedAssignment";
import type { Assignment } from "../../../store/assignment";

export default function AssignmentTableItem({ assignment, index, length }: { assignment: Assignment, index: number, length: number }) {
    const assignmentValue = useAppSelector(state => state.assignment)

    const dispatch = useAppDispatch()

    const ClickAssignmentHandler = (e: any): void => {
        const clickedAssignmentId = e.currentTarget.id

        const payload: SetClickedAssignmentPayload = {
            assignment: assignmentValue.find(assignment => assignment.id === clickedAssignmentId)
        }
        dispatch(clickedAssignmentActions.setClickedAssignment(payload))

        dispatch(modalActions.setModalState({ type: ModalState.CHECK_ASSIGNMENT }))
    }

    return (
        <tr id={assignment.id} onClick={ClickAssignmentHandler}>
            <Td>{length - index}</Td>
            <Td>{assignment.title}</Td>
            <Td>{assignment.content.length > 5 ? assignment.content.slice(0, 3) + '...' : assignment.content}</Td>
            <Td>{DateFormater('yyyy년 MM월 DD일', assignment.deadLine)}</Td>
        </tr>
    )
}