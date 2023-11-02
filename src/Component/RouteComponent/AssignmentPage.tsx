import ModalButtonItem from "../Modal/ActiveModalButtonWrapper/ModalButtonItem";
import ModalButtonList from "../Modal/ActiveModalButtonWrapper/ModalButtonList";
import OtherWrapper from "../Wrapper/OtherWrapper";
import SubNavigation from "../Navigation/SubNavigation/SubNavigation";
import SubNavigationItem from "../Navigation/SubNavigation/SubNavigationItem";
import AssignmentMainContent from '../Assignment/Content/AssignmentMainContent';
import { useState } from 'react';
import { useAppDispatch } from '../../store/hooks/storeHooks';
import { ModalState, modalActions } from '../../store/modal';

export enum AssignmentState {
    ASSIGNMENT = 'ASSIGNEMNT',
    SUBMIT = 'SUBMIT'
}

export default function AssignmentPage() {
    const dispatch = useAppDispatch()

    const [assignmentState, setAssignmentState] = useState<AssignmentState>(AssignmentState.ASSIGNMENT)

    const ClickAddAssignmentHandler = (): void => {
        dispatch(modalActions.setModalState({ type: ModalState.ADD_ASSIGNMNET }))
    }

    const ClickDeleteAssignmentHandler = (): void => {
        dispatch(modalActions.setModalState({ type: ModalState.DELETE_ASSIGNMNET }))
    }

    const ClickModifyAssignmentHandler = (): void => {
        dispatch(modalActions.setModalState({ type: ModalState.MODIFY_ASSIGNMENT }))
    }

    return (
        <>
            <ModalButtonList>
                <ModalButtonItem onClick={ClickAddAssignmentHandler}>추가하기</ModalButtonItem>
                <ModalButtonItem onClick={ClickDeleteAssignmentHandler}>삭제하기</ModalButtonItem>
                <ModalButtonItem onClick={ClickModifyAssignmentHandler}>수정하기</ModalButtonItem>
            </ModalButtonList>

            <OtherWrapper>
                <SubNavigation>
                    <SubNavigationItem onClick={() => { setAssignmentState(AssignmentState.ASSIGNMENT) }} className={assignmentState === AssignmentState.ASSIGNMENT ? 'clicked' : ''}>과제</SubNavigationItem>
                    <SubNavigationItem onClick={() => { setAssignmentState(AssignmentState.SUBMIT) }} className={assignmentState === AssignmentState.SUBMIT ? 'clicked' : ''}>제출</SubNavigationItem>
                </SubNavigation>

                <AssignmentMainContent assignmentState={assignmentState} />
            </OtherWrapper>
        </>
    )
}
