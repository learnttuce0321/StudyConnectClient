import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks/storeHooks"
import { attendanceRateActions } from "../../store/attendanceRate"
import UsersSummary from "../Main/Statistics/UsersSummary"
import SummaryMainContent from "../Main/UsersSummary/SummaryMainContent"
import MainWrapper from "../Wrapper/MainWrapper"
import SubNavigation from '../navigation/SubNavigation/SubNavigation'
import type { CalculateAttendaceRatePayload } from "../../store/attendanceRate"
import SubNavigationItem from "../navigation/SubNavigation/SubNavigationItem"
import Section from "../Else/Section"

export enum SummaryNavState {
    USER = 'USER',
    ASSIGNMENT = 'ASSIGNMENT'
}

export default function MainPage() {
    const dispatch = useAppDispatch()

    const userValue = useAppSelector(state => state.user)
    const attendanceValue = useAppSelector(state => state.attendance)

    useEffect(() => {
        const payload: CalculateAttendaceRatePayload = {
            userValue,
            attendanceValue
        }
        dispatch(attendanceRateActions.CalculateAttendanceRate(payload))
    }, [dispatch, userValue, attendanceValue])

    const [summaryNavState, setSummaryNavState] = useState<SummaryNavState>(SummaryNavState.USER)

    return (
        <MainWrapper>

            <UsersSummary />

            <Section>
                <SubNavigation>
                    <SubNavigationItem onClick={() => { setSummaryNavState(SummaryNavState.USER) }} className={summaryNavState === SummaryNavState.USER ? 'clicked' : ''}>회원</SubNavigationItem>
                    <SubNavigationItem onClick={() => { setSummaryNavState(SummaryNavState.ASSIGNMENT) }} className={summaryNavState === SummaryNavState.ASSIGNMENT ? 'clicked' : ''}>과제</SubNavigationItem>
                </SubNavigation>
                <SummaryMainContent summaryNavState={summaryNavState} />
            </Section>

        </MainWrapper>
    )
}



