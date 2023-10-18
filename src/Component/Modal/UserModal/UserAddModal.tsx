import { useState, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks'
import { userActions } from '../../../store/user'
import { attendanceActions } from '../../../store/attendance'
import { attendanceRateActions } from '../../../store/attendanceRate'
import type { ModalFunctionProps } from '../ModalWrapper/Modal'
import type { AddUserPayload } from '../../../store/user'
import type { _AddAttendancePayload } from '../../../store/attendance'
import type { _AddAttendanceRatePayload } from '../../../store/attendanceRate'
import ModalTextInputItem from '../ModalInputItem/ModalTextInputItem'
import ModalRadioInputItem from '../ModalInputItem/ModalRadioInputItem'
import ModalTitle from '../ModalInputItem/ModalTitle'
import ModalButtonsContainer from '../ModalWrapper/ModalButtonsContainer'
import ModalContentContainer from '../ModalWrapper/ModalContentContainer'
import ModalButton from '../ModalInputItem/ModalButton'


export default function UserAddModal({ ClickQuitHandler }: ModalFunctionProps) {
    const [sexValue, setSexValue] = useState<string>()

    const dispatch = useAppDispatch()
    const scheduleValue = useAppSelector(state => state.schedule)
    const userValue = useAppSelector(state => state.user)

    const nameRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)

    const ClickAddUserHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        const nameInput = nameRef.current
        const phoneInput = phoneRef.current
        const ageInput = ageRef.current

        const addUserPayload: AddUserPayload = {
            name: nameInput!.value,
            phone: phoneInput!.value,
            age: parseInt(ageInput!.value),
            sex: sexValue as string
        }

        dispatch(userActions.addUser(addUserPayload))

        const _addAttendancePayload: _AddAttendancePayload = {
            schedules: scheduleValue,
            userId: userValue.length + 1
        }
        dispatch(attendanceActions._AddAttendance(_addAttendancePayload))

        const _addAttendanceRatePayload: _AddAttendanceRatePayload = {
            userId: userValue.length + 1
        }
        dispatch(attendanceRateActions._AddAttendanceRate(_addAttendanceRatePayload))

        nameInput!.value = ''
        phoneInput!.value = ''
        ageInput!.value = '0'
        setSexValue(undefined)
        ClickQuitHandler()
    }

    return (
        <>
            <ModalContentContainer>
                <ModalTitle>
                    회원 추가
                </ModalTitle>
                <ModalTextInputItem name={'이름'} ref={nameRef} />
                <ModalTextInputItem name={'핸드폰'} ref={phoneRef} />
                <ModalTextInputItem name={'나이'} ref={ageRef} />
                <div style={{ display: 'flex', marginBottom: '0.3rem' }}>
                    <p style={{ width: '3rem' }}>성별</p>
                    <ModalRadioInputItem setSexValue={setSexValue} value={'male'} />
                    <ModalRadioInputItem setSexValue={setSexValue} value={'female'} />
                </div>
            </ModalContentContainer>
            <ModalButtonsContainer>
                <ModalButton onClick={ClickAddUserHandler}>추가</ModalButton>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
            </ModalButtonsContainer>
        </>
    )
}
