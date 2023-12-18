import ModalTextInputItem from '../ModalInputItem/ModalTextInputItem'
import ModalRadioInputItem from '../ModalInputItem/ModalRadioInputItem'
import ModalTitle from '../ModalInputItem/ModalTitle'
import ModalButtonsContainer from '../ModalWrapper/ModalButtonsContainer'
import ModalContentContainer from '../ModalWrapper/ModalContentContainer'
import ModalButton from '../ModalInputItem/ModalButton'
import { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks'
import { userActions } from '../../../store/user'
import { attendanceActions } from '../../../store/attendance'
import { attendanceRateActions } from '../../../store/attendanceRate'
import { submitRateActions } from '../../../store/submitRate'
import { submitActions } from '../../../store/submit'
import type { ModalFunctionProps } from '../ModalWrapper/Modal'
import type { AddSubmitRatePayload } from '../../../store/submitRate'
import type { AddSubmitPayloadByUser } from '../../../store/submit'
import type { AddUserPayload } from '../../../store/user'
import type { AddAttendanceByUserPayload } from '../../../store/attendance'
import type { AddAttendanceRatePayload } from '../../../store/attendanceRate'

export default function UserAddModal({ ClickQuitHandler }: ModalFunctionProps) {
    const scheduleValue = useAppSelector(state => state.schedule)
    const assignmentValue = useAppSelector(state => state.assignment)

    const dispatch = useAppDispatch()

    const { studyId } = useParams() as { studyId: string }

    const nameRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const ageRef = useRef<HTMLInputElement>(null)

    const [sexValue, setSexValue] = useState<string>()

    const ClickAddUserHandler = async (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()

        const nameInput = nameRef.current
        const phoneInput = phoneRef.current
        const ageInput = ageRef.current
        const id = uuidv4()

        const userResult = await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_BASE_URL}/study/${studyId}/user/add`,
            data: {
                id,
                name: nameInput!.value,
                phone: phoneInput!.value,
                age: Number(ageInput!.value),
                info: '',
                sex: sexValue as string,
                studyId
            }
        })

        const attendanceResult = await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_BASE_URL}/study/${studyId}/attendance/add-user`,
            data: {
                schedules: scheduleValue,
                userId: id,
                studyId,
            }
        })

        const attendanceRateResult = await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_BASE_URL}/study/${studyId}/attendance-rate/add`,
            data: {
                userId: id,
                studyId
            }
        })

        const submitResult = await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_BASE_URL}/study/${studyId}/submit/add-user`,
            data: {
                assignments: assignmentValue,
                userId: id,
                studyId
            }
        })

        const submitRateResult = await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_BASE_URL}/study/${studyId}/submit-rate/add`,
            data: {
                userId: id,
                studyId
            }
        })

        const addUserPayload: AddUserPayload = {
            ...userResult.data.data
        }
        dispatch(userActions.addUser(addUserPayload))

        const addAttendanceByUserPayload: AddAttendanceByUserPayload = {
            attendances: attendanceResult.data.data
        }
        dispatch(attendanceActions.AddAttendanceByUser(addAttendanceByUserPayload))

        const addAttendanceRatePayload: AddAttendanceRatePayload = {
            attendanceRate: attendanceRateResult.data.data
        }
        dispatch(attendanceRateActions.AddAttendanceRate(addAttendanceRatePayload))

        const addSubmitPayload: AddSubmitPayloadByUser = {
            submits: submitResult.data.data
        }
        dispatch(submitActions.AddSubmitByUser(addSubmitPayload))

        const addSubmitRatePayload: AddSubmitRatePayload = {
            submitRate: submitRateResult.data.data
        }
        dispatch(submitRateActions.AddSubmitRate(addSubmitRatePayload))

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
