import { faBars, faCaretRight, faX } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"
import { useAppDispatch, useAppSelector } from "../../store/hooks/storeHooks"
import { studyActions } from "../../store/study"
import { ModalState, modalActions } from "../../store/modal"
import type { SetStudyDataPayload } from "../../store/study"

export default function StudyPage() {
    const studyValue = useAppSelector(state => state.study)

    const dispatch = useAppDispatch()

    const [toggle, setToggle] = useState<boolean>(false)

    const ClickToggleHandler = (e: any): void => {
        setToggle(prev => !prev)
    }

    const ClickAddStudyHandler = (): void => {
        setToggle(false)
        dispatch(modalActions.setModalState({ type: ModalState.ADD_STUDY }))
    }

    const ClickDeleteStudyHandler = (): void => {
        setToggle(false)
        dispatch(modalActions.setModalState({ type: ModalState.DELETE_STUDY }))
    }

    useEffect(() => {
        const getStudiesData = async (): Promise<any> => {
            try {
                const result = await axios({
                    method: 'GET',
                    url: '/get',
                })

                if (result.data.result) {
                    const payload: SetStudyDataPayload = { studies: result.data.data }
                    dispatch(studyActions.SetStudyData(payload))
                }
            } catch (error) {
                console.log(error)
            }
        }

        getStudiesData();
    }, [dispatch])

    return (
        <>
            <nav>
                <HeaderBar>
                    <h1 style={{ color: 'white' }}>스터디 회원 관리</h1>
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
                            <p onClick={ClickAddStudyHandler} style={{ cursor: 'pointer' }}>추가하기</p>
                        </NavItem>
                        <NavItem>
                            <p onClick={ClickDeleteStudyHandler} style={{ cursor: 'pointer' }}>삭제하기</p>
                        </NavItem>
                    </TopBarWrap>
                </HeaderBar>

                <SideBarWrap className={toggle ? 'open' : ''}>
                    <NavItem>
                        <p onClick={ClickAddStudyHandler}>추가하기</p>
                    </NavItem>
                    <NavItem>
                        <p onClick={ClickDeleteStudyHandler}>삭제하기</p>
                    </NavItem>
                </SideBarWrap>
                {
                    toggle && ReactDOM.createPortal(<Backdrop onClick={ClickToggleHandler} />, document.querySelector('#backdrop-root') as HTMLElement)
                }
            </nav>

            <main >
                <StudyListContainer>
                    {
                        studyValue.map(study => {
                            return (
                                <Link to={`/study/${study.id}/main`} key={study.id}>
                                    <StudyListItem>
                                        <h1>{study.name}</h1>
                                        <FontAwesomeIcon icon={faCaretRight} style={{ fontSize: '2.5rem' }} />
                                    </StudyListItem>
                                </Link>
                            )
                        })
                    }
                </StudyListContainer>
            </main>
        </>
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
    color: white;
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
const StudyListContainer = styled.ul`
    height: calc( 100vh - 3rem );
    padding: 2rem 2rem;
    overflow-y: scroll;

    @media screen and ( min-width: 820px ) {
        padding: 2rem 4.5rem;
    }

    @media screen and ( min-width: 1180px ) {
        padding: 2rem 8rem;
    }

    @media screen and (min-width: 1400px) {
        padding: 4rem 12rem;
    }
`
const StudyListItem = styled.li`
    height: 4rem;
    list-style: none;
    padding: 0rem 1.5rem;
    border: 1px solid gray;
    border-radius: 15px;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`