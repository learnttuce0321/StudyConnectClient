import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks/storeHooks';
import ModalButtonItem from "../Modal/ActiveModalButtonWrapper/ModalButtonItem";
import ModalButtonList from "../Modal/ActiveModalButtonWrapper/ModalButtonList";
import OtherWrapper from "../Wrapper/OtherWrapper";
import SubNavigation from "../Navigation/SubNavigation/SubNavigation";
import SubNavigationItem from "../Navigation/SubNavigation/SubNavigationItem";
import AssignmentMainContent from '../Assignment/Content/AssignmentMainContent';
import { ModalState, modalActions } from '../../store/modal';
import { submitRateActions } from '../../store/submitRate';
import type { CalculateSubmitRatePayload } from '../../store/submitRate';
import { useParams } from 'react-router-dom';

export enum AssignmentState {
    ASSIGNMENT = 'ASSIGNEMNT',
    SUBMIT = 'SUBMIT'
}
export default function AssignmentPage() {

    const dispatch = useAppDispatch()
    const { studyId }: { studyId: string } = useParams() as { studyId: string }

    const userValue = useAppSelector(state => state.user)
    const submitValue = useAppSelector(state => state.submit)
    const [assignmentState, setAssignmentState] = useState<AssignmentState>(AssignmentState.ASSIGNMENT)

    // useEffect(() => {
    //     const calculateSubmitRatePayload: CalculateSubmitRatePayload = {
    //         userValue,
    //         submitValue,
    //         studyId
    //     }
    //     dispatch(submitRateActions.CalculateSubmitRate(calculateSubmitRatePayload))
    // }, [dispatch, userValue, submitValue, studyId])

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
