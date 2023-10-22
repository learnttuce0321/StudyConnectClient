import { useState } from 'react'
import ReactDOM from "react-dom"
import { Link, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../store/hooks/storeHooks"
import { clickedUserActions, setClickedUserPayload } from "../../../store/clickedUser"
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHouse, faX } from "@fortawesome/free-solid-svg-icons";
import { filteredUserActions } from '../../../store/filteredUser'

export default function Navigation() {
    const dispatch = useAppDispatch()

    const [toggle, setToggle] = useState<boolean>(false)

    const ClickHandler = (): void => {
        const payload: setClickedUserPayload = { user: {} }
        dispatch(clickedUserActions.setClickedUser(payload))
        setToggle(false)
    }

    const navigate = useNavigate()
    const ClickHomeHandler = (): void => {
        dispatch(clickedUserActions.setClickedUser({ user: {} }))
        dispatch(filteredUserActions.setFilteredUser({ filteredUser: [], isFiltering: false }))
        setToggle(false)
        navigate('/')
    }

    const ClickToggleHandler = (e: any): void => {
        setToggle(prev => !prev)
    }


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
                        <Link to='/' onClick={ClickHandler}>메인</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/user' onClick={ClickHandler}>회원</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/message' onClick={ClickHandler}>메세지</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/attendance' onClick={ClickHandler}>출석</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/assignment' onClick={ClickHandler}>과제</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/fine' onClick={ClickHandler}>벌금</Link>
                    </NavItem>
                    <NavItem>
                        <Link to='/myPage' onClick={ClickHandler}>마이페이지</Link>
                    </NavItem>
                </TopBarWrap>
            </HeaderBar>


            <SideBarWrap className={toggle ? 'open' : ''}>
                <NavItem>
                    <Link to='/' onClick={ClickHandler}>메인</Link>
                </NavItem>
                <NavItem>
                    <Link to='/user' onClick={ClickHandler}>회원</Link>
                </NavItem>
                <NavItem>
                    <Link to='/message' onClick={ClickHandler}>메세지</Link>
                </NavItem>
                <NavItem>
                    <Link to='/attendance' onClick={ClickHandler}>출석</Link>
                </NavItem>
                <NavItem>
                    <Link to='/assignment' onClick={ClickHandler}>과제</Link>
                </NavItem>
                <NavItem>
                    <Link to='/fine' onClick={ClickHandler}>벌금</Link>
                </NavItem>
                <NavItem>
                    <Link to='/myPage' onClick={ClickHandler}>마이페이지</Link>
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