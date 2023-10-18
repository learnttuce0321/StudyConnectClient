import { useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks'
import { scheduleActions } from '../../../store/schedule'
import { type AddSchedulePayload, type Schedule } from '../../../store/schedule'
import type { ModalFunctionProps } from '../ModalWrapper/Modal'
import ModalSelectItem from '../ModalInputItem/ModalSelectItem'
import ModalTitle from '../ModalInputItem/ModalTitle'
import ModalTextInputItem from '../ModalInputItem/ModalTextInputItem'
import ModalContentContainer from '../ModalWrapper/ModalContentContainer'
import ModalButtonsContainer from '../ModalWrapper/ModalButtonsContainer'
import ModalButton from '../ModalInputItem/ModalButton'


export default function ScheduleModifyModal({ ClickQuitHandler }: ModalFunctionProps) {
    const dispatch = useAppDispatch()
    const scheduleValue = useAppSelector(state => state.schedule)

    const [selectedSchedule, setSelectedSchedule] = useState<Schedule>()

    const scheduleIdRef = useRef<HTMLInputElement>(null)
    const locationRef = useRef<HTMLInputElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)
    const timeRef = useRef<HTMLInputElement>(null)

    const ClickScheduleHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const scheduleId = e.target.value
        const selectedScheduleObj = scheduleValue.find(schedule => schedule.scheduleId === scheduleId)
        setSelectedSchedule(selectedScheduleObj)
    }

    const ClickModifyHandler = (): void => {
        if (window.confirm('수정하시겠습니까?')) {
            const scheduleIdInput = scheduleIdRef.current
            const locationInput = locationRef.current
            const dateInput = dateRef.current
            const timeInput = timeRef.current

            console.log(scheduleIdInput)
            const _modifySchedulePayload: AddSchedulePayload = {
                scheduleId: scheduleIdInput!.value,
                date: dateInput!.value,
                location: locationInput!.value,
                time: timeInput!.value
            }
            dispatch(scheduleActions._ModifySchedule(_modifySchedulePayload))

            setSelectedSchedule(undefined)
            ClickQuitHandler()
        }
    }

    return (
        <>
            <ModalContentContainer>
                <ModalTitle>수정</ModalTitle>
                <ModalSelectItem name={"일정"} onChange={ClickScheduleHandler}>
                    <option value={''}>선택</option>
                    {
                        scheduleValue.map(schedule => {
                            return (
                                <option key={schedule.id} value={schedule.scheduleId}>{schedule.scheduleId}</option>
                            )
                        })
                    }
                </ModalSelectItem>
                {
                    selectedSchedule ? (
                        <>
                            <ModalTextInputItem name="이름" ref={scheduleIdRef} defaultValue={selectedSchedule!.scheduleId} readOnly={true} />
                            <ModalTextInputItem name="날짜" ref={dateRef} defaultValue={selectedSchedule!.date} />
                            <ModalTextInputItem name="시간" ref={timeRef} defaultValue={selectedSchedule!.time} />
                            <ModalTextInputItem name="장소" ref={locationRef} defaultValue={selectedSchedule!.location} />
                        </>
                    ) : null
                }
            </ModalContentContainer>
            <ModalButtonsContainer>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
                {
                    selectedSchedule ? <ModalButton onClick={ClickModifyHandler}>수정하기</ModalButton> : null
                }
            </ModalButtonsContainer>
        </>
    )
}