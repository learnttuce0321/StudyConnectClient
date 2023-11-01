import ModalButton from "../ModalInputItem/ModalButton";
import ModalTextInputItem from "../ModalInputItem/ModalTextInputItem";
import ModalTitle from "../ModalInputItem/ModalTitle";
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer";
import ModalContentContainer from "../ModalWrapper/ModalContentContainer";
import { useAppSelector } from "../../../store/hooks/storeHooks";
import { DateFormater } from "../../../utils/utils";
import type { ModalFunctionProps } from "../ModalWrapper/Modal";

export default function ScheduleCheckModal({ ClickQuitHandler }: ModalFunctionProps) {
    const clickedScheduleValue = useAppSelector(state => state.clickedSchedule)

    return (
        <>
            <ModalContentContainer>
                <ModalTitle>
                    일정 상세 정보
                </ModalTitle>
                <ModalTextInputItem name={'일정 이름'} value={clickedScheduleValue.name} readOnly={true} />
                <ModalTextInputItem name={'날짜'} value={DateFormater('yyyy년 MM월 DD일', clickedScheduleValue.date)} readOnly={true} />
                <ModalTextInputItem name={'시간'} value={clickedScheduleValue.time} readOnly={true} />
                <ModalTextInputItem name={'장소'} value={clickedScheduleValue.location} readOnly={true} />
            </ModalContentContainer>

            <ModalButtonsContainer>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
            </ModalButtonsContainer>
        </>
    )
}