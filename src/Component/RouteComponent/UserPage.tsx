import Modal from "../Modal/ModalWrapper/Modal"
import { useState } from "react"
import { useAppSelector, useAppDispatch } from "../../store/hooks/storeHooks"
import { clickedUserActions } from "../../store/clickedUser"
import { ModalState, modalActions } from "../../store/modal"
import { filteredUserActions } from "../../store/filteredUser"
import OtherWrapper from "../Wrapper/OtherWrapper"
import SummaryUserContent from "../User/Summary/SummaryUserContent"
import UserInfo from "../User/Summary/UserInfo"
import UsersTable from "../User/UsersTable/UsersTable"
import ModalButtonList from "../Modal/OpenModalButtonWrapper/ModalButtonList"
import ModalButtonItem from "../Modal/OpenModalButtonWrapper/ModalButtonItem"
import SubNavigation from "../navigation/SubNavigation/SubNavigation"
import SubNavigationItem from "../navigation/SubNavigation/SubNavigationItem"
import SubNav from "../Else/SubNav"
import Section from "../Else/Section"
import styled from "styled-components"

export enum ShowLogStatus {
    ATTENDANCE = 'ATTENDANCE',
    ASSIGNMENT = 'ASSIGNMNET'
}

export default function UserPage() {

    const dispatch = useAppDispatch()
    const clickedUserValue = useAppSelector(state => state.clickedUser)
    const modalValue = useAppSelector(state => state.modal)

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
            <SubNav>
                <ModalButtonList>
                    <ModalButtonItem onClick={ClickAddUserHandler}>추가</ModalButtonItem>
                    <ModalButtonItem onClick={ClickFilterUserHandler}>검색</ModalButtonItem>
                    <ModalButtonItem onClick={ClickResetHandler}>초기화</ModalButtonItem>
                </ModalButtonList>
            </SubNav>

            <OtherWrapper>

                <Container>
                    <ContainerLeft>
                        <UsersTable />
                    </ContainerLeft>
                    <ContainerRight>
                        <Section>
                            <SubNavigation>
                                <SubNavigationItem onClick={() => { setshowLog(ShowLogStatus.ATTENDANCE) }} className={showLog === ShowLogStatus.ATTENDANCE ? 'clicked' : ''}>출석</SubNavigationItem>
                                <SubNavigationItem onClick={() => { setshowLog(ShowLogStatus.ASSIGNMENT) }} className={showLog === ShowLogStatus.ASSIGNMENT ? 'clicked' : ''}>과제</SubNavigationItem>
                            </SubNavigation>
                            {
                                Object.keys(clickedUserValue).length !== 0 ? (
                                    <div>
                                        <UserInfo clickedUserValue={clickedUserValue} />
                                        <hr />
                                        <SummaryUserContent userId={clickedUserValue.id} showLog={showLog} />
                                    </div>
                                ) : (
                                    <div>
                                        <h1>회원을 클릭해 주세요</h1>
                                    </div>
                                )
                            }
                            {
                                modalValue.type !== ModalState.NONE && <Modal />
                            }
                        </Section>
                    </ContainerRight>
                </Container>
            </OtherWrapper>
        </>
    )
}

const Container = styled.div`
    @media screen and (min-width: 1180px) {
        display: flex;
        justify-content: space-around;
        height: 100%;
    }
`
const ContainerLeft = styled.div`
        @media screen and (min-width: 1180px) {
        width: 25vw;
        padding-top: 1rem;
    }
`
const ContainerRight = styled.div`
        @media screen and (min-width: 1180px) {
        width: 65vw;
    }
`