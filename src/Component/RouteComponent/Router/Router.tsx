import Navigation from '../../Navigation/MainNavigation/Navigation';
import MainPage from '../MainPage';
import UserPage from '../UserPage';
import MessagePage from '../MessagePage';
import SchedulePage from '../SchedulePage';
import AssignmentPage from '../AssignmentPage';
import FinePage from '../FinePage';
import StudyPage from '../StudyPage';
import Modal from '../../Modal/ModalWrapper/Modal';
import { Routes, Route, Outlet, useParams } from 'react-router-dom';
import { ModalState } from '../../../store/modal';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks';
import axios from 'axios';
import { SetAssignmentDataPayload, assignmentActions } from '../../../store/assignment';
import { SetAttendanceDataPayload, attendanceActions } from '../../../store/attendance';
import { SetAttendanceRateDataPayload, attendanceRateActions } from '../../../store/attendanceRate';
import { SetFineDataPayload, fineActions } from '../../../store/fine';
import { SetMessageDataPayload, messageActions } from '../../../store/message';
import { SetScheduleDataPayload, scheduleActions } from '../../../store/schedule';
import { SetSubmitDataPayload, submitActions } from '../../../store/submit';
import { SetSubmitRateDataPayload, submitRateActions } from '../../../store/submitRate';
import { SetUserDataPayload, userActions } from '../../../store/user';
import { useEffect } from 'react';

export default function Router() {
    const modalValue = useAppSelector(state => state.modal)

    return (
        <>
            <Routes>
                <Route path='/' element={
                    <>
                        <StudyPage />
                        {
                            modalValue.type !== ModalState.NONE && <Modal />
                        }
                    </>
                }
                />

                <Route path='/study/:studyId' element={
                    <>
                        <Data />
                        <Navigation />
                        <Outlet />
                        {
                            modalValue.type !== ModalState.NONE && <Modal />
                        }
                    </>
                }>
                    <Route path='main' element={<MainPage />} />
                    <Route path='user' element={<UserPage />} />
                    <Route path='message' element={<MessagePage />} />
                    <Route path='schedule' element={<SchedulePage />} />
                    <Route path='assignment' element={<AssignmentPage />} />
                    <Route path='fine' element={<FinePage />} />
                </Route>
            </Routes>
        </>
    )
}

function Data() {
    const dispatch = useAppDispatch()
    const { studyId } = useParams()

    useEffect(() => {
        const GetDatas = async (): Promise<any> => {
            const userResult = await axios({
                method: 'GET',
                url: `${process.env.REACT_APP_BASE_URL}/study/${studyId}/get`
            })

            if (userResult.data.result) {
                const setAssignmentDataPayload: SetAssignmentDataPayload = {
                    assignments: userResult.data.assignmentData
                }
                const setAttendanceDataPayload: SetAttendanceDataPayload = {
                    attendanes: userResult.data.attendanceData
                }
                const setAttendanceRateDataPayload: SetAttendanceRateDataPayload = {
                    attendanceRates: userResult.data.attendanceRateData
                }
                const setFineDataPayload: SetFineDataPayload = {
                    fines: userResult.data.fineData
                }
                const setMessageDataPayload: SetMessageDataPayload = {
                    messages: userResult.data.messageData
                }
                const setScheduleDataPayload: SetScheduleDataPayload = {
                    schedules: userResult.data.scheduleData
                }
                const setSubmitDataPayload: SetSubmitDataPayload = {
                    submits: userResult.data.submitData
                }
                const setSubmitRateDataPayload: SetSubmitRateDataPayload = {
                    submitRates: userResult.data.submitRateData
                }
                const setUserDataPayload: SetUserDataPayload = {
                    users: userResult.data.userData
                }
                console.log(setUserDataPayload)

                dispatch(assignmentActions.SetAssignmentsData(setAssignmentDataPayload))
                dispatch(attendanceActions.SetAttendanceData(setAttendanceDataPayload))
                dispatch(attendanceRateActions.SetAttendanceRateData(setAttendanceRateDataPayload))
                dispatch(fineActions.SetFineData(setFineDataPayload))
                dispatch(messageActions.SetMessageData(setMessageDataPayload))
                dispatch(scheduleActions.SetSchduleData(setScheduleDataPayload))
                dispatch(submitActions.SetSutmitData(setSubmitDataPayload))
                dispatch(submitRateActions.SetSubmitData(setSubmitRateDataPayload))
                dispatch(userActions.SetUserData(setUserDataPayload))
            }
        }
        GetDatas()
    }, [dispatch, studyId])

    return (
        <></>
    )
}