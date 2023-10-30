import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hooks/storeHooks"
import { attendanceRateActions } from "../../store/attendanceRate"
import UsersSummary from "../Main/Statistics/UsersSummary"
import SummaryMainContent from "../Main/UsersSummary/SummaryMainContent"
import MainWrapper from "../Wrapper/MainWrapper"
import SubNavigation from '../Navigation/SubNavigation/SubNavigation'
import type { CalculateAttendaceRatePayload } from "../../store/attendanceRate"
import SubNavigationItem from "../Navigation/SubNavigation/SubNavigationItem"
import { CalculateSubmitRatePayload, submitRateActions } from "../../store/submitRate"
import { useParams } from "react-router-dom"

export enum SummaryNavState {
    USER = 'USER',
    ASSIGNMENT = 'ASSIGNMENT'
}

export default function MainPage() {
    const dispatch = useAppDispatch()
    const { studyId }: { studyId: string } = useParams() as { studyId: string }

    const userValue = useAppSelector(state => state.user)
    const attendanceValue = useAppSelector(state => state.attendance)
    const submitValue = useAppSelector(state => state.submit)

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



