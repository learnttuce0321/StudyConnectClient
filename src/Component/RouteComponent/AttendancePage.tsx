import Modal from "../Modal/ModalWrapper/Modal"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks/storeHooks"
import { attendanceRateActions } from "../../store/attendanceRate"
import { modalActions, ModalState } from "../../store/modal"
import type { CalculateAttendaceRatePayload } from "../../store/attendanceRate"
import OtherWrapper from "../Wrapper/OtherWrapper"
import ModalButtonList from "../Modal/ActiveModalButtonWrapper/ModalButtonList"
import ModalButtonItem from "../Modal/ActiveModalButtonWrapper/ModalButtonItem"
import AttendanceTable from "../Attendance/AttendanceTable/AttendanceTable"


export default function AttendancePage() {
    const userValue = useAppSelector(state => state.user)
    const attendanceValue = useAppSelector(state => state.attendance)
    const modalValue = useAppSelector(state => state.modal)

    const dispatch = useAppDispatch()

    useEffect(() => {
        const payload: CalculateAttendaceRatePayload = {
            userValue,
            attendanceValue
        }
        dispatch(attendanceRateActions.CalculateAttendanceRate(payload))
    }, [dispatch, userValue, attendanceValue])

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
                <AttendanceTable />
            </OtherWrapper>
            {
                modalValue.type !== ModalState.NONE && <Modal />
            }
        </>
    )
}


