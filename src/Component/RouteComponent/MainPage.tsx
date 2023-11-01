import UsersSummary from "../Main/Statistics/UsersSummary"
import SummaryMainContent from "../Main/UsersSummary/SummaryMainContent"
import MainWrapper from "../Wrapper/MainWrapper"
import SubNavigation from '../Navigation/SubNavigation/SubNavigation'
import SubNavigationItem from "../Navigation/SubNavigation/SubNavigationItem"
import { useState } from "react"

export enum SummaryNavState {
    USER = 'USER',
    ASSIGNMENT = 'ASSIGNMENT'
}

export default function MainPage() {

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



