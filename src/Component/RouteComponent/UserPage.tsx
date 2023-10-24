import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../store/hooks/storeHooks"
import { clickedUserActions } from "../../store/clickedUser"
import { ModalState, modalActions } from "../../store/modal"
import { filteredUserActions } from "../../store/filteredUser"
import OtherWrapper from "../Wrapper/OtherWrapper"
import UserSummaryContent from "../User/Summary/UserSummaryContent"
import UsersTable from "../User/UsersTable/UsersTable"
import ModalButtonList from "../Modal/ActiveModalButtonWrapper/ModalButtonList"
import ModalButtonItem from "../Modal/ActiveModalButtonWrapper/ModalButtonItem"
import SubNavigation from "../Navigation/SubNavigation/SubNavigation"
import SubNavigationItem from "../Navigation/SubNavigation/SubNavigationItem"
import styled from "styled-components"
import { userData } from "../../DummyData/userData"

export enum ShowLogStatus {
    ATTENDANCE = 'ATTENDANCE',
    ASSIGNMENT = 'ASSIGNMNET'
}

export default function UserPage() {

    const dispatch = useAppDispatch()
    const clickedUserValue = useAppSelector(state => state.clickedUser)

    const [showLog, setshowLog] = useState<ShowLogStatus>(ShowLogStatus.ATTENDANCE)

    const ClickAddUserHandler = (): void => {
        dispatch(modalActions.setModalState({ type: ModalState.ADD_USER }))
    }
    const ClickFilterUserHandler = (): void => {
        dispatch(modalActions.setModalState({ type: ModalState.FILTER_USER }))
    }
    const ClickResetHandler = (): void => {
        dispatch(filteredUserActions.setFilteredUser({ filteredUser: [], isFiltering: false }))
        dispatch(modalActions.setModalState({ type: ModalState.NONE }))
        dispatch(clickedUserActions.setClickedUser({ user: {} }))
    }

    return (
        <>
            <ModalButtonList>
                <ModalButtonItem onClick={ClickAddUserHandler}>추가</ModalButtonItem>
                <ModalButtonItem onClick={ClickFilterUserHandler}>검색</ModalButtonItem>
                <ModalButtonItem onClick={ClickResetHandler}>초기화</ModalButtonItem>
            </ModalButtonList>

            <OtherWrapper>
                <Container>
                    <ContainerLeft>
                        <UsersTable />
                    </ContainerLeft>

                    <ContainerRight>

                        <SubNavigation>
                            <SubNavigationItem onClick={() => { setshowLog(ShowLogStatus.ATTENDANCE) }} className={showLog === ShowLogStatus.ATTENDANCE ? 'clicked' : ''}>출석</SubNavigationItem>
                            <SubNavigationItem onClick={() => { setshowLog(ShowLogStatus.ASSIGNMENT) }} className={showLog === ShowLogStatus.ASSIGNMENT ? 'clicked' : ''}>과제</SubNavigationItem>
                        </SubNavigation>

                        {
                            Object.keys(clickedUserValue).length !== 0 ? (
                                <UserSummaryContent showLog={showLog} />
                            ) : (
                                <h1>회원을 클릭해 주세요</h1>
                            )
                        }

                    </ContainerRight>
                </Container>
            </OtherWrapper>
        </>
    )
}

const Container = styled.div`
    height: 100%;
    @media screen and (min-width: 1180px) {
        display: flex;
        justify-content: space-around;   
    }
`
const ContainerLeft = styled.div`
    height: 20%;
    @media screen and (min-width: 1180px) {
        height: 100%;
        width: 25vw;
        padding-top: 1rem;
    }
`
const ContainerRight = styled.div`
    height: 80%;
    @media screen and (min-width: 1180px) {
        height: 100%;
        width: 65vw;
    }
`