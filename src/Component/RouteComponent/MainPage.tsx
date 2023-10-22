import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks/storeHooks"
import { attendanceRateActions } from "../../store/attendanceRate"
import UsersSummary from "../Main/Statistics/UsersSummary"
import SummaryMainContent from "../Main/UsersSummary/SummaryMainContent"
import MainWrapper from "../Wrapper/MainWrapper"
import SubNavigation from '../navigation/SubNavigation/SubNavigation'
import type { CalculateAttendaceRatePayload } from "../../store/attendanceRate"
import SubNavigationItem from "../navigation/SubNavigation/SubNavigationItem"
import { CalculateSubmitRatePayload, submitRateActions } from "../../store/submitRate"

export enum SummaryNavState {
    USER = 'USER',
    ASSIGNMENT = 'ASSIGNMENT'
}

export default function MainPage() {
    const dispatch = useAppDispatch()

    const userValue = useAppSelector(state => state.user)
    const attendanceValue = useAppSelector(state => state.attendance)
    const submitValue = useAppSelector(state => state.submit)

    useEffect(() => {
        const calculateAttendaceRatePayload: CalculateAttendaceRatePayload = {
            userValue,
            attendanceValue
        }
        dispatch(attendanceRateActions.CalculateAttendanceRate(calculateAttendaceRatePayload))

        const calculateSubmitRatePayload: CalculateSubmitRatePayload = {
            userValue,
            submitValue
        }
        dispatch(submitRateActions.CalculateSubmitRate(calculateSubmitRatePayload))
    }, [dispatch, userValue, attendanceValue, submitValue])

    const [summaryNavState, setSummaryNavState] = useState<SummaryNavState>(SummaryNavState.USER)

    return (
        <MainWrapper>

            <UsersSummary />

            <SubNavigation>
                <SubNavigationItem onClick={() => { setSummaryNavState(SummaryNavState.USER) }} className={summaryNavState === SummaryNavState.USER ? 'clicked' : ''}>회원</SubNavigationItem>
                <SubNavigationItem onClick={() => { setSummaryNavState(SummaryNavState.ASSIGNMENT) }} className={summaryNavState === SummaryNavState.ASSIGNMENT ? 'clicked' : ''}>과제</SubNavigationItem>
            </SubNavigation>

            <SummaryMainContent summaryNavState={summaryNavState} />
        </MainWrapper>
    )
}



