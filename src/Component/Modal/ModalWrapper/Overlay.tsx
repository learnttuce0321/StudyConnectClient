import MessageAddModal from "../MessageModal/MessageAddModal"
import ScheduleAddModal from '../ScheduleModal/ScheduleAddModal'
import ScheduleModifyModal from '../ScheduleModal/ScheduleModifyModal'
import ScheduleDeleteModal from '../ScheduleModal/ScheduleDeleteModal'
import UserAddModal from "../UserModal/UserAddModal"
import UserFindModal from "../UserModal/UserFindModal"
import AssignmentAddModal from "../AssignmentModal/AssignmentAddModal"
import AssignmentDeleteModal from "../AssignmentModal/AssignmentDeleteModal"
import AssignmentModifyModal from "../AssignmentModal/AssignmentModifyModal"
import FineAddModal from "../FineModal/FineAddModal"
import FineDeleteModal from "../FineModal/FineDeleteModal"
import FineModifyModal from "../FineModal/FineModifyModal"
import StudyAddModal from "../StudyModal/StudyAddModal"
import StudyDeleteModal from "../StudyModal/StudyDeleteModal"
import styled from "styled-components"
import MessageCheckModal from "../MessageModal/MessageCheckModal"
import ScheduleCheckModal from "../ScheduleModal/ScheduleCheckModal"
import AssignmentCheckModal from "../AssignmentModal/AssignmentCheckModal"
import { useAppSelector } from "../../../store/hooks/storeHooks"
import { ModalState } from "../../../store/modal"
import type { ModalFunctionProps } from "./Modal"

export default function Overlay({ ClickQuitHandler }: ModalFunctionProps) {
    const modalValue = useAppSelector(state => state.modal)

    /**
     * ModalState값에 따라 모달의 보여주는 내용을 다르게 보여줌
     * @returns 
     */
    const ModalContent = (): (JSX.Element | undefined) => {
        switch (modalValue.type) {
            case ModalState.ADD_ATTENDANCE:
                return <ScheduleAddModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.MODIFY_ATTENDANCE:
                return <ScheduleModifyModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.DELETE_ATTENDANCE:
                return <ScheduleDeleteModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.CHECK_SCHEDULE:
                return <ScheduleCheckModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.ADD_MESSAGE:
                return <MessageAddModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.CHECK_MESSAGE:
                return <MessageCheckModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.ADD_USER:
                return <UserAddModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.FILTER_USER:
                return <UserFindModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.ADD_ASSIGNMNET:
                return <AssignmentAddModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.DELETE_ASSIGNMNET:
                return <AssignmentDeleteModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.MODIFY_ASSIGNMENT:
                return <AssignmentModifyModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.CHECK_ASSIGNMENT:
                return <AssignmentCheckModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.ADD_FINE:
                return <FineAddModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.DELETE_FINE:
                return <FineDeleteModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.MODIFY_FINE:
                return <FineModifyModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.ADD_STUDY:
                return <StudyAddModal ClickQuitHandler={ClickQuitHandler} />
            case ModalState.DELETE_STUDY:
                return <StudyDeleteModal ClickQuitHandler={ClickQuitHandler} />
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