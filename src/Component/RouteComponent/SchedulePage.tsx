import OtherWrapper from "../Wrapper/OtherWrapper"
import ModalButtonList from "../Modal/ActiveModalButtonWrapper/ModalButtonList"
import ModalButtonItem from "../Modal/ActiveModalButtonWrapper/ModalButtonItem"
import SubNavigation from "../Navigation/SubNavigation/SubNavigation"
import SubNavigationItem from "../Navigation/SubNavigation/SubNavigationItem"
import ScheduleMainContent from "../Schedule/Content/ScheduleMainContent"
import { useState } from "react"
import { useAppDispatch } from "../../store/hooks/storeHooks"
import { modalActions, ModalState } from "../../store/modal"

export enum ScheduleState {
    SCHEDULE = 'SCHEDULE',
    ATTENDANCE = 'ATTENDANCE'
}
export default function AttendancePage() {

    const dispatch = useAppDispatch()

    const [scheduleState, setScheduleState] = useState<ScheduleState>(ScheduleState.SCHEDULE)

    const ClickAddAttendanceHandler = (): void => {
        dispatch(modalActions.setModalState({ type: ModalState.ADD_ATTENDANCE }))
    }
    const ClickDeleteAttendanceHandler = (): void => {
        dispatch(modalActions.setModalState({ type: ModalState.DELETE_ATTENDANCE }))
    }
    const ClickModifyAttendanceHandler = (): void => {
        dispatch(modalActions.setModalState({ type: ModalState.MODIFY_ATTENDANCE }))
    }

    return (
        <>
            <ModalButtonList>
                <ModalButtonItem onClick={ClickAddAttendanceHandler}>추가하기</ModalButtonItem>
                <ModalButtonItem onClick={ClickDeleteAttendanceHandler}>삭제하기</ModalButtonItem>
                <ModalButtonItem onClick={ClickModifyAttendanceHandler}>수정하기</ModalButtonItem>
            </ModalButtonList>

            <OtherWrapper>
                <SubNavigation>
                    <SubNavigationItem onClick={() => { setScheduleState(ScheduleState.SCHEDULE) }} className={scheduleState === ScheduleState.SCHEDULE ? 'clicked' : ''}>일정</SubNavigationItem>
                    <SubNavigationItem onClick={() => { setScheduleState(ScheduleState.ATTENDANCE) }} className={scheduleState === ScheduleState.ATTENDANCE ? 'clicked' : ''}>출석</SubNavigationItem>
                </SubNavigation>

                <ScheduleMainContent scheduleState={scheduleState} />
            </OtherWrapper>
        </>
    )
}


