import { useState } from 'react'
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks"
import { attendanceActions } from '../../../store/attendance'
import { scheduleActions } from '../../../store/schedule'
import type { _DeleteAttendancePayload } from '../../../store/attendance'
import type { _DeleteSchedulePayload } from '../../../store/schedule'
import type { ModalFunctionProps } from '../ModalWrapper/Modal'
import ModalTitle from '../ModalInputItem/ModalTitle'
import ModalSelectItem from '../ModalInputItem/ModalSelectItem'
import ModalContentContainer from '../ModalWrapper/ModalContentContainer'
import ModalButtonsContainer from '../ModalWrapper/ModalButtonsContainer'
import ModalButton from '../ModalInputItem/ModalButton'

export default function ScheduleDeleteModal({ ClickQuitHandler }: ModalFunctionProps) {
    const dispatch = useAppDispatch()
    const scheduleValue = useAppSelector(state => state.schedule)

    const [selectedScheduleId, setSelectedScheduleId] = useState<string>('')
    const ClickScheduleHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedScheduleId(e.target!.value)
    }

    const ClickDeleteHandler = () => {
        if (window.confirm('정말 삭제하시겠습니까?')) {

            const _DeleteAttendancePayload: _DeleteAttendancePayload = {
                scheduleId: selectedScheduleId
            }
            dispatch(attendanceActions._DeleteAttendance(_DeleteAttendancePayload))

            const _DeleteSchedulePayload: _DeleteSchedulePayload = {
                id: selectedScheduleId
            }
            dispatch(scheduleActions._DeleteSchedule(_DeleteSchedulePayload))

            setSelectedScheduleId('')
            ClickQuitHandler()
        }
    }
    return (
        <>
            <ModalContentContainer>
                <ModalTitle>삭제</ModalTitle>
                <ModalSelectItem name={'일정'} onChange={ClickScheduleHandler}>
                    <option value={''}>선택</option>
                    {
                        scheduleValue.map(schedule => {
                            return (
                                <option key={schedule.id} value={schedule.id}>{schedule.name}</option>
                            )
                        })
                    }
                </ModalSelectItem>
            </ModalContentContainer>

            <ModalButtonsContainer>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
                {
                    selectedScheduleId.trim().length ? <ModalButton onClick={ClickDeleteHandler}>삭제하기</ModalButton> : null
                }
            </ModalButtonsContainer>
        </>
    )
}