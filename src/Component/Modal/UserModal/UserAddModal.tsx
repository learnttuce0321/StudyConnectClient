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
import { _AddSubmitRatePayload, submitRateActions } from '../../../store/submitRate'
import { submitActions } from '../../../store/submit'
import { v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom'


export default function UserAddModal({ ClickQuitHandler }: ModalFunctionProps) {
    const [sexValue, setSexValue] = useState<string>()

    const dispatch = useAppDispatch()
    const { studyId } = useParams() as { studyId: string }

    const scheduleValue = useAppSelector(state => state.schedule)
    const assignmentValue = useAppSelector(state => state.assignment)

    const nameRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)

    const ClickAddUserHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        const nameInput = nameRef.current
        const phoneInput = phoneRef.current
        const ageInput = ageRef.current
        const id = uuidv4()

        const addUserPayload: AddUserPayload = {
            id,
            name: nameInput!.value,
            phone: phoneInput!.value,
            age: Number(ageInput!.value),
            sex: sexValue as string,
            studyId
        }
        dispatch(userActions.addUser(addUserPayload))


        const _addAttendancePayload: _AddAttendancePayload = {
            schedules: scheduleValue,
            userId: id,
            studyId
        }
        dispatch(attendanceActions._AddAttendance(_addAttendancePayload))

        const _addAttendanceRatePayload: _AddAttendanceRatePayload = {
            userId: id,
            studyId
        }
        dispatch(attendanceRateActions._AddAttendanceRate(_addAttendanceRatePayload))

        const _addSubmitPayload = {
            assignments: assignmentValue,
            userId: id
        }
        dispatch(submitActions._AddSubmit(_addSubmitPayload))
        const _addSubmitRatePayload: _AddSubmitRatePayload = {
            userId: id,
            studyId
        }
        dispatch(submitRateActions._AddSubmitRate(_addSubmitRatePayload))

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
