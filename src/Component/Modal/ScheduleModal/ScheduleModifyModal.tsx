import { useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks'
import { scheduleActions } from '../../../store/schedule'
import { type ModifySchedulePayload, type Schedule } from '../../../store/schedule'
import type { ModalFunctionProps } from '../ModalWrapper/Modal'
import ModalSelectItem from '../ModalInputItem/ModalSelectItem'
import ModalTitle from '../ModalInputItem/ModalTitle'
import ModalTextInputItem from '../ModalInputItem/ModalTextInputItem'
import ModalContentContainer from '../ModalWrapper/ModalContentContainer'
import ModalButtonsContainer from '../ModalWrapper/ModalButtonsContainer'
import ModalButton from '../ModalInputItem/ModalButton'
import axios from 'axios'
import { DateFormater } from '../../../utils/utils'

// todos : 일정 변경하면 defaultValue 변경 되야함
export default function ScheduleModifyModal({ ClickQuitHandler }: ModalFunctionProps) {
    const dispatch = useAppDispatch()
    const scheduleValue = useAppSelector(state => state.schedule)

    const [selectedSchedule, setSelectedSchedule] = useState<Schedule>()

    const nameRef = useRef<HTMLInputElement>(null)
    const locationRef = useRef<HTMLInputElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)
    const timeRef = useRef<HTMLInputElement>(null)

    const ClickScheduleHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const id = e.target.value
        if (id !== 'none') {
            const selectedScheduleObj = scheduleValue.find(schedule => schedule.id === id)
            console.log(selectedSchedule === selectedScheduleObj)
            setSelectedSchedule(selectedScheduleObj)
        }
    }

    const ClickModifyScheduleHandler = async (): Promise<any> => {
        if (window.confirm('수정하시겠습니까?')) {
            const nameInput = nameRef.current
            const locationInput = locationRef.current
            const dateInput = dateRef.current
            const timeInput = timeRef.current

            const result = await axios({
                method: 'PATCH',
                url: 'schedule/update',
                data: {
                    id: selectedSchedule!.id,
                    name: nameInput!.value,
                    date: dateInput!.value,
                    location: locationInput!.value,
                    time: timeInput!.value
                }
            })

            if (result.data.result) {
                const modifySchedulePayload: ModifySchedulePayload = {
                    ...result.data.data
                }
                dispatch(scheduleActions.ModifySchedule(modifySchedulePayload))
            }

            setSelectedSchedule(undefined)
            ClickQuitHandler()
        }
    }

    return (
        <>
            <ModalContentContainer>
                <ModalTitle>수정</ModalTitle>
                <ModalSelectItem name={"일정"} onChange={ClickScheduleHandler}>
                    <option value={'none'}>선택</option>
                    {
                        scheduleValue.map(schedule => {
                            return (
                                <option key={schedule.id} value={schedule.id}>{schedule.name}</option>
                            )
                        })
                    }
                </ModalSelectItem>
                {
                    selectedSchedule ? (
                        <>
                            <ModalTextInputItem name="이름" ref={nameRef} defaultValue={selectedSchedule!.name} />
                            <ModalTextInputItem name="날짜" ref={dateRef} defaultValue={selectedSchedule!.date} />
                            <ModalTextInputItem name="시간" ref={timeRef} defaultValue={selectedSchedule!.date} />
                            <ModalTextInputItem name="장소" ref={locationRef} defaultValue={selectedSchedule!.location} />
                        </>
                    ) : null
                }
            </ModalContentContainer>
            <ModalButtonsContainer>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
                {
                    selectedSchedule ? <ModalButton onClick={ClickModifyScheduleHandler}>수정하기</ModalButton> : null
                }
            </ModalButtonsContainer>
        </>
    )
}