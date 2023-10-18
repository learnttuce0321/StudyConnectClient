import ReactDOM from "react-dom"
import Overlay from "./Overlay"
import styled from "styled-components"
import { ModalPayload, modalActions, ModalState } from "../../../store/modal"
import { useAppDispatch } from "../../../store/hooks/storeHooks"

export interface ModalFunctionProps {
    ClickQuitHandler: () => void
}

export default function Modal() {

    const dispatch = useAppDispatch()

    const ClickQuitHandler = (): void => {
        const modalPayload: ModalPayload = { type: ModalState.NONE }
        dispatch(modalActions.setModalState(modalPayload))
    }
    return (
        <>
            {
                ReactDOM.createPortal(<Backdrop onClick={ClickQuitHandler} />, document.querySelector('#backdrop-root') as HTMLElement)
            }
            {
                ReactDOM.createPortal(<Overlay ClickQuitHandler={ClickQuitHandler} />, document.querySelector('#overlay-root') as HTMLElement)
            }
        </>
    )
}
const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    background-color: rgb(0, 0, 0, 0.5);
`