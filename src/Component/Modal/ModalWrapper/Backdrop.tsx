import type { ModalFunctionProps } from "./Modal"

export default function Backdrop({ClickQuitHandler}: ModalFunctionProps) {       
    return (
        <div className="modalBackground" onClick={ClickQuitHandler}></div>
    )
}