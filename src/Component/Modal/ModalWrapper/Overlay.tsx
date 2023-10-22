import { useAppSelector } from "../../../store/hooks/storeHooks"
import MessageModal from "../MessageModal/MessageModal"
import { ModalState } from "../../../store/modal"
import ScheduleAddModal from '../ScheduleModal/ScheduleAddModal'
import ScheduleModifyModal from '../ScheduleModal/ScheduleModifyModal'
import ScheduleDeleteModal from '../ScheduleModal/ScheduleDeleteModal'
import type { ModalFunctionProps } from "./Modal"
import styled from "styled-components"
import UserAddModal from "../UserModal/UserAddModal"
import UserFindModal from "../UserModal/UserFindModal"
import AssignmentAddModal from "../AssignmentModal/AssignmentAddModal"

export default function Overlay({ ClickQuitHandler }: ModalFunctionProps) {
    const modalValue = useAppSelector(state => state.modal)

    const ModalContent = (): (JSX.Element | undefined) => {
        switch (modalValue.type) {
            case ModalState.ADD_ATTENDANCE:
                return <ScheduleAddModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.MODIFY_ATTENDANCE:
                return <ScheduleModifyModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.DELETE_ATTENDANCE:
                return <ScheduleDeleteModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.ADD_MESSAGE:
                return <MessageModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.ADD_USER:
                return <UserAddModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.FILTER_USER:
                return <UserFindModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.ADD_ASSIGNMNET:
                return <AssignmentAddModal ClickQuitHandler={ClickQuitHandler} />
        }
    }
    return (
        <ModalCard>
            {ModalContent()}
        </ModalCard>
    )
}

const ModalCard = styled.div`
    width: 90vw; 
    position: fixed; 
    padding: 1rem;
    left: 5vw; 
    top: 25vh;
    height: 30vh;
    z-index: 12; 
    background-color: white;
    border: 1px solid #282828;
    border-radius: 5px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (min-width: 1180px){
        left: 15vw;
        width: 70vw;
        padding: 1rem 3rem;
    }
`