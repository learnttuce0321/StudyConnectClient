import ModalButton from "../ModalInputItem/ModalButton";
import ModalTextInputItem from "../ModalInputItem/ModalTextInputItem";
import ModalTitle from "../ModalInputItem/ModalTitle";
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer";
import ModalContentContainer from "../ModalWrapper/ModalContentContainer";
import { useAppSelector } from "../../../store/hooks/storeHooks";
import { DateFormater } from "../../../utils/utils";
import type { ModalFunctionProps } from "../ModalWrapper/Modal";

export default function AssignmentCheckModal({ ClickQuitHandler }: ModalFunctionProps) {
    const clickedAssignmentValue = useAppSelector(state => state.clickedAssignment)

    return (
        <>
            <ModalContentContainer>
                <ModalTitle>
                    일정 상세 정보
                </ModalTitle>
                <ModalTextInputItem name={'과제 이름'} value={clickedAssignmentValue.title} readOnly={true} />
                <ModalTextInputItem name={'내용'} value={clickedAssignmentValue.content} readOnly={true} />
                <ModalTextInputItem name={'기한'} value={DateFormater('yyyy년 MM월 DD일', clickedAssignmentValue.deadLine)} readOnly={true} />
            </ModalContentContainer>

            <ModalButtonsContainer>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
            </ModalButtonsContainer>
        </>
    )
}