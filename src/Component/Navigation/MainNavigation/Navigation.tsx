import { faBars, faBook, faHouse, faX } from "@fortawesome/free-solid-svg-icons";
import { useState, memo, useEffect } from 'react'
import ReactDOM from "react-dom"
import { Link, useNavigate, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks"
import styled from 'styled-components'
import { clickedUserActions } from "../../../store/clickedUser"
import { filteredUserActions } from '../../../store/filteredUser'
import { assignmentActions } from '../../../store/assignment'
import { attendanceActions } from '../../../store/attendance'
import { attendanceRateActions } from '../../../store/attendanceRate'
import { fineActions } from '../../../store/fine'
import { messageActions } from '../../../store/message'
import { scheduleActions } from '../../../store/schedule'
import { submitActions } from '../../../store/submit'
import { submitRateActions } from '../../../store/submitRate'
import { userActions } from '../../../store/user'
import type { SetClickedUserPayload } from "../../../store/clickedUser"
import type { SetAssignmentDataPayload } from '../../../store/assignment'
import type { SetAttendanceDataPayload } from '../../../store/attendance'
import type { SetAttendanceRateDataPayload } from '../../../store/attendanceRate'
import type { SetFineDataPayload } from '../../../store/fine'
import type { SetMessageDataPayload } from '../../../store/message'
import type { SetScheduleDataPayload } from '../../../store/schedule'
import type { SetSubmitDataPayload } from '../../../store/submit'
import type { SetSubmitRateDataPayload } from '../../../store/submitRate'
import type { SetUserDataPayload } from '../../../store/user'
import axios from 'axios'

export default function Navigation() {
    const dispatch = useAppDispatch()

    const { studyId } = useParams()

    const navigate = useNavigate()
    const attendanceRateValue = useAppSelector(state => state.attendaceRate)

    const [toggle, setToggle] = useState<boolean>(false)

    const ClickHandler = (): void => {
        const payload: SetClickedUserPayload = { user: {} }
        dispatch(clickedUserActions.setClickedUser(payload))
        setToggle(false)
    }

    const ClickHomeHandler = (): void => {
        dispatch(clickedUserActions.setClickedUser({ user: {} }))
        dispatch(filteredUserActions.setFilteredUser({ filteredUser: [], isFiltering: false }))
        setToggle(false)
        navigate(`/study/${studyId}/main`)
    }

    const ClickStudyHandler = (): void => {
        dispatch(assignmentActions.SetAssignmentsData({ assignments: [] }))
        dispatch(attendanceActions.SetAttendanceData({ attendanes: [] }))
        dispatch(attendanceRateActions.SetAttendanceRateData({ attendanceRates: [] }))
        dispatch(fineActions.SetFineData({ fines: [] }))
        dispatch(messageActions.SetMessageData({ messages: [] }))
        dispatch(scheduleActions.SetSchduleData({ schedules: [] }))
        dispatch(submitActions.SetSutmitData({ submits: [] }))
        dispatch(submitRateActions.SetSubmitData({ submitRates: [] }))
        dispatch(userActions.SetUserData({ users: [] }))
        dispatch(clickedUserActions.setClickedUser({ user: {} }))
        dispatch(filteredUserActions.setFilteredUser({ filteredUser: [], isFiltering: false }))
        setToggle(false)
        navigate(`/`)
    }

    const ClickToggleHandler = (e: any): void => {
        setToggle(prev => !prev)
    }

    // useEffect(() => {
    //     /**
    //      * studyId와 동일한 data를 DB에서 가져와 store에 등록하는 함수
    //      */
    //     const GetDatas = async (): Promise<any> => {
    //         const userResult = await axios({
    //             method: 'GET',
    //             url: `${process.env.REACT_APP_BASE_URL}/study/${studyId}/get`
    //         })

    //         if (userResult.data.result) {
    //             const setAssignmentDataPayload: SetAssignmentDataPayload = {
    //                 assignments: userResult.data.assignmentData
    //             }
    //             const setAttendanceDataPayload: SetAttendanceDataPayload = {
    //                 attendanes: userResult.data.attendanceData
    //             }
    //             const setAttendanceRateDataPayload: SetAttendanceRateDataPayload = {
    //                 attendanceRates: userResult.data.attendanceRateData
    //             }
    //             const setFineDataPayload: SetFineDataPayload = {
    //                 fines: userResult.data.fineData
    //             }
    //             const setMessageDataPayload: SetMessageDataPayload = {
    //                 messages: userResult.data.messageData
    //             }
    //             const setScheduleDataPayload: SetScheduleDataPayload = {
    //                 schedules: userResult.data.scheduleData
    //             }
    //             const setSubmitDataPayload: SetSubmitDataPayload = {
    //                 submits: userResult.data.submitData
    //             }
    //             const setSubmitRateDataPayload: SetSubmitRateDataPayload = {
    //                 submitRates: userResult.data.submitRateData
    //             }
    //             const setUserDataPayload: SetUserDataPayload = {
    //                 users: userResult.data.userData
    //             }
    //             console.log(setUserDataPayload)

    //             dispatch(assignmentActions.SetAssignmentsData(setAssignmentDataPayload))
    //             dispatch(attendanceActions.SetAttendanceData(setAttendanceDataPayload))
    //             dispatch(attendanceRateActions.SetAttendanceRateData(setAttendanceRateDataPayload))
    //             dispatch(fineActions.SetFineData(setFineDataPayload))
    //             dispatch(messageActions.SetMessageData(setMessageDataPayload))
    //             dispatch(scheduleActions.SetSchduleData(setScheduleDataPayload))
    //             dispatch(submitActions.SetSutmitData(setSubmitDataPayload))
    //             dispatch(submitRateActions.SetSubmitData(setSubmitRateDataPayload))
    //             dispatch(userActions.SetUserData(setUserDataPayload))
    //         }
    //     }
    //     GetDatas()
    // }, [dispatch])
    useEffect(() => {
        console.log(attendanceRateValue)
    }, [attendanceRateValue])

    return (
        <nav>
            <HeaderBar>
                <span>
                    <FontAwesomeIcon icon={faBook} onClick={ClickStudyHandler} style={{ color: 'white', cursor: 'pointer' }} />
                    <FontAwesomeIcon icon={faHouse} onClick={ClickHomeHandler} style={{ color: 'white', cursor: 'pointer', marginLeft: '0.8rem' }} />
                </span>
                <NavIconContainer>
                    {
                        !toggle ? (
                            <FontAwesomeIcon icon={faBars} onClick={ClickToggleHandler} style={{ color: 'white', cursor: 'pointer' }} />
                        ) : (
                            <FontAwesomeIcon icon={faX} onClick={ClickToggleHandler} style={{ color: 'white', cursor: 'pointer' }} />
                        )
                    }
                </NavIconContainer>
                <TopBarWrap>
                    <NavItem>
                        <Link to={`/study/${studyId}/main`} onClick={ClickHandler}>메인</Link>
                    </NavItem>
                    <NavItem>
                        <Link to={`/study/${studyId}/user`} onClick={ClickHandler}>회원</Link>
                    </NavItem>
                    <NavItem>
                        <Link to={`/study/${studyId}/message`} onClick={ClickHandler}>메세지</Link>
                    </NavItem>
                    <NavItem>
                        <Link to={`/study/${studyId}/schedule`} onClick={ClickHandler}>일정</Link>
                    </NavItem>
                    <NavItem>
                        <Link to={`/study/${studyId}/assignment`} onClick={ClickHandler}>과제</Link>
                    </NavItem>
                    <NavItem>
                        <Link to={`/study/${studyId}/fine`} onClick={ClickHandler}>벌금</Link>
                    </NavItem>
                </TopBarWrap>
            </HeaderBar>


            <SideBarWrap className={toggle ? 'open' : ''}>
                <NavItem>
                    <Link to={`/study/${studyId}/main`} onClick={ClickHandler}>메인</Link>
                </NavItem>
                <NavItem>
                    <Link to={`/study/${studyId}/user`} onClick={ClickHandler}>회원</Link>
                </NavItem>
                <NavItem>
                    <Link to={`/study/${studyId}/message`} onClick={ClickHandler}>메세지</Link>
                </NavItem>
                <NavItem>
                    <Link to={`/study/${studyId}/schedule`} onClick={ClickHandler}>출석</Link>
                </NavItem>
                <NavItem>
                    <Link to={`/study/${studyId}/assignment`} onClick={ClickHandler}>과제</Link>
                </NavItem>
                <NavItem>
                    <Link to={`/study/${studyId}/fine`} onClick={ClickHandler}>벌금</Link>
                </NavItem>
            </SideBarWrap>
            {
                toggle && ReactDOM.createPortal(<Backdrop onClick={ClickToggleHandler} />, document.querySelector('#backdrop-root') as HTMLElement)
            }
        </nav>
    )
}

const HeaderBar = styled.div`
    background-color: #282828;
    width: 100vw;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    transition: 0.5s ease;
`
const SideBarWrap = styled.ul`
    z-index: 12;
    padding: 18px 12px;
    background-color: #282828;
    height: 100%;
    width: 55%;
    left: -55%;
    top: 0;
    position: fixed;
    transition: 0.5s ease;

    &.open {
        left: 0;
    }

    @media screen and (min-width: 1180px) {
        display: none;
    }
`;
const TopBarWrap = styled.ul`
    display: flex;
    @media screen and (max-width: 1179px) {
        display: none;
    }
`
const NavItem = styled.li`
    height: 2rem;
    font-size: 1.2rem;
    padding: 0.4rem;

    & a {
        color: white;
    }
`
const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: rgb(0, 0, 0, 0);

    @media screen and ( min-width: 1180px ) {
        display: none;
    }
`
const NavIconContainer = styled.span`
    @media screen and ( min-width: 1180px ) {
        display: none;
    }
`