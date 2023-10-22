import type { ModalFunctionProps } from "./Modal"

export default function Backdrop({ ClickQuitHandler }: ModalFunctionProps) {
    const backdropStyle: any = {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        zIndex: '10',
        backgroundColor: 'rgb(0, 0, 0, 0.5)'
    }

    return (
        <div style={backdropStyle} onClick={ClickQuitHandler}></div>
    )
}