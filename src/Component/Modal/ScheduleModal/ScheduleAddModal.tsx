import { useRef } from "react"
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks"
import { scheduleActions } from "../../../store/schedule"
import type { AddSchedulePayload } from "../../../store/schedule"
import type { addAttendancePayload } from "../../../store/attendance"
import { attendanceActions } from "../../../store/attendance"
import type { ModalFunctionProps } from '../ModalWrapper/Modal'
import ModalTextInputItem from "../ModalInputItem/ModalTextInputItem"
import ModalTitle from "../ModalInputItem/ModalTitle"
import ModalContentContainer from "../ModalWrapper/ModalContentContainer"
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer"
import ModalButton from "../ModalInputItem/ModalButton"


export default function ScheduleAddModal({ ClickQuitHandler }: ModalFunctionProps) {
    const scheduleIdRef = useRef<HTMLInputElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)
    const timeRef = useRef<HTMLInputElement>(null)
    const locationRef = useRef<HTMLInputElement>(null)

    const dispatch = useAppDispatch()
    const userValue = useAppSelector(state => state.user)

    const ClickAddScheduleHandler = (): void => {
        const inputScheduleId = scheduleIdRef.current
        const inputDate = dateRef.current
        const inputTime = timeRef.current
        const inputLocation = locationRef.current

        const schedulePayload: AddSchedulePayload = {
            scheduleId: inputScheduleId!.value.trim(),
            date: inputDate!.value.trim(),
            time: inputTime!.value.trim(),
            location: inputLocation!.value.trim(),
        }
        const attendancePayload: addAttendancePayload = {
            users: userValue,
            scheduleId: inputScheduleId!.value.trim(),
            date: inputDate!.value.trim(),
        }

        dispatch(scheduleActions.AddSchedule(schedulePayload))
        dispatch(attendanceActions.AddAttendance(attendancePayload))
        ClickQuitHandler()
    }

    return (
        <>
            <ModalContentContainer>
                <ModalTitle>추가</ModalTitle>

                <ModalTextInputItem name={'이름'} ref={scheduleIdRef} />
                <ModalTextInputItem name={'날짜'} ref={dateRef} />
                <ModalTextInputItem name={'시간'} ref={timeRef} />
                <ModalTextInputItem name={'장소'} ref={locationRef} />
            </ModalContentContainer>

            <ModalButtonsContainer>
                <ModalButton onClick={ClickAddScheduleHandler}>추가</ModalButton>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
            </ModalButtonsContainer>
        </>
    )
}