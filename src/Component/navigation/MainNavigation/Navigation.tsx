import { useState, memo, useEffect } from 'react'
import ReactDOM from "react-dom"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useAppDispatch } from "../../../store/hooks/storeHooks"
import { clickedUserActions, setClickedUserPayload } from "../../../store/clickedUser"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faX } from "@fortawesome/free-solid-svg-icons";
import { filteredUserActions } from '../../../store/filteredUser'
import { SetAssignmentDataPayload, assignmentActions } from '../../../store/assignment'
// todos : DB연결 후 삭제
import { assignmentData } from '../../../DummyData/assignmentData'
import { SetAttendanceDataPayload, attendanceActions } from '../../../store/attendance'
import { attendanceData } from '../../../DummyData/attendanceData'
import { SetAttendanceRateDataPayload, attendanceRateActions } from '../../../store/attendanceRate'
import { attendanceRateData } from '../../../DummyData/attendaneRateData'
import { SetFineDataPayload, fineActions } from '../../../store/fine'
import { fineData } from '../../../DummyData/fineData'
import { SetMessageDataPayload, messageActions } from '../../../store/message'
import { messageData } from '../../../DummyData/messageData'
import { SetScheduleDataPayload, scheduleActions } from '../../../store/schedule'
import { scheduleData } from '../../../DummyData/scheduleData'
import { SetSubmitDataPayload, submitActions } from '../../../store/submit'
import { submitData } from '../../../DummyData/submitData'
import { SetSubmitRateDataPayload, submitRateActions } from '../../../store/submitRate'
import { submitRateData } from '../../../DummyData/sutmitRateData'
import { SetUserDataPayload, userActions } from '../../../store/user'
import { userData } from '../../../DummyData/userData'

export default memo(function Navigation() {
    const dispatch = useAppDispatch()
    const [toggle, setToggle] = useState<boolean>(false)

    const ClickHandler = (): void => {
        const payload: setClickedUserPayload = { user: {} }
        dispatch(clickedUserActions.setClickedUser(payload))
        setToggle(false)
    }

    const navigate = useNavigate()
    const { studyId } = useParams()

    const ClickHomeHandler = (): void => {
        dispatch(clickedUserActions.setClickedUser({ user: {} }))
        dispatch(filteredUserActions.setFilteredUser({ filteredUser: [], isFiltering: false }))
        setToggle(false)
        navigate(`/study/${studyId}/main`)
    }

    const ClickToggleHandler = (e: any): void => {
        setToggle(prev => !prev)
    }

    useEffect(() => {
        const setAssignmentDataPayload: SetAssignmentDataPayload = {
            assignments: assignmentData.filter(assignment => assignment.studyId === studyId)
        }
        const setAttendanceDataPayload: SetAttendanceDataPayload = {
            attendanes: attendanceData.filter(attendance => attendance.studyId === studyId)
        }
        const setAttendanceRateDataPayload: SetAttendanceRateDataPayload = {
            attendanceRates: attendanceRateData.filter(attendanceRate => attendanceRate.studyId === studyId)
        }
        const setFineDataPayload: SetFineDataPayload = {
            fines: fineData.filter(fine => fine.studyId === studyId)
        }
        const setMessageDataPayload: SetMessageDataPayload = {
            messages: messageData.filter(message => message.studyId === studyId)
        }
        const setScheduleDataPayload: SetScheduleDataPayload = {
            schedules: scheduleData.filter(schedule => schedule.studyId === studyId)
        }
        const setSubmitDataPayload: SetSubmitDataPayload = {
            submits: submitData.filter(submit => submit.studyId === studyId)
        }
        const setSubmitRateDataPayload: SetSubmitRateDataPayload = {
            submitRates: submitRateData.filter(submitRate => submitRate.studyId === studyId)
        }
        const setUserDataPayload: SetUserDataPayload = {
            users: userData.filter(user => user.studyId === studyId)
        }

        dispatch(assignmentActions.SetAssignmentsData(setAssignmentDataPayload))
        dispatch(attendanceActions.SetAttendanceData(setAttendanceDataPayload))
        dispatch(attendanceRateActions.SetAttendanceRateData(setAttendanceRateDataPayload))
        dispatch(fineActions.SetFineData(setFineDataPayload))
        dispatch(messageActions.SetMessageData(setMessageDataPayload))
        dispatch(scheduleActions.SetSchduleData(setScheduleDataPayload))
        dispatch(submitActions.SetSutmitData(setSubmitDataPayload))
        dispatch(submitRateActions.SetSubmitData(setSubmitRateDataPayload))
        dispatch(userActions.SetUserData(setUserDataPayload))
    }, [dispatch, studyId])
    return (
        <nav>
            <HeaderBar>
                <FontAwesomeIcon icon={faHouse} onClick={ClickHomeHandler} style={{ color: 'white', cursor: 'pointer' }} />
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
                    <NavItem>
                        <Link to={`/study/${studyId}/myPage`} onClick={ClickHandler}>마이페이지</Link>
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
                    <Link to={`/study/${studyId}/attendance`} onClick={ClickHandler}>출석</Link>
                </NavItem>
                <NavItem>
                    <Link to={`/study/${studyId}/assignment`} onClick={ClickHandler}>과제</Link>
                </NavItem>
                <NavItem>
                    <Link to={`/study/${studyId}/fine`} onClick={ClickHandler}>벌금</Link>
                </NavItem>
                <NavItem>
                    <Link to={`/study/${studyId}/myPage`} onClick={ClickHandler}>마이페이지</Link>
                </NavItem>
            </SideBarWrap>
            {
                toggle && ReactDOM.createPortal(<Backdrop onClick={ClickToggleHandler} />, document.querySelector('#backdrop-root') as HTMLElement)
            }
        </nav>
    )
})

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