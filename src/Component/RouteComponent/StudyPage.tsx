import ReactDOM from "react-dom"
import { useAppDispatch, useAppSelector } from "../../store/hooks/storeHooks"
import { useEffect, useState } from "react"
import { studyData } from "../../DummyData/studyData"
import { studyActions } from "../../store/study"
import type { SetStudyDataPayload } from "../../store/study"
import styled from "styled-components"
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

export default function StudyPage() {

    const dispatch = useAppDispatch()
    const studyValue = useAppSelector(state => state.study)

    const [toggle, setToggle] = useState<boolean>(false)

    const ClickToggleHandler = (e: any): void => {
        setToggle(prev => !prev)
    }


    // todos : DB연결 후 restAPI로 변경
    useEffect(() => {
        const payload: SetStudyDataPayload = { studies: studyData }
        dispatch(studyActions.SetStudyData(payload))
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
                            <p>추가하기</p>
                        </NavItem>
                        <NavItem>
                            <p>삭제하기</p>
                        </NavItem>
                    </TopBarWrap>
                </HeaderBar>

                <SideBarWrap className={toggle ? 'open' : ''}>
                    <NavItem>
                        <p>추가하기</p>
                    </NavItem>
                    <NavItem>
                        <p>삭제하기</p>
                    </NavItem>
                </SideBarWrap>
                {
                    toggle && ReactDOM.createPortal(<Backdrop onClick={ClickToggleHandler} />, document.querySelector('#backdrop-root') as HTMLElement)
                }
            </nav>
            {
                studyValue.map(study => {
                    return (
                        <Link to={`/study/${study.id}/main`} key={study.id}>
                            <h1>{study.name}</h1>
                        </Link>
                    )
                })
            }
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