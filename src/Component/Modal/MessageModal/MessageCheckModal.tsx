import ModalButton from "../ModalInputItem/ModalButton";
import ModalTitle from "../ModalInputItem/ModalTitle";
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer";
import ModalContentContainer from "../ModalWrapper/ModalContentContainer";
import ModalTextInputItem from "../ModalInputItem/ModalTextInputItem";
import { DateFormater } from "../../../utils/utils";
import { useAppSelector } from "../../../store/hooks/storeHooks";
import type { ModalFunctionProps } from "../ModalWrapper/Modal";
import { useMemo } from "react";

export default function MessageCheckModal({ ClickQuitHandler }: ModalFunctionProps) {
    const clickedMessageValue = useAppSelector(state => state.clickedMessage)
    const userValue = useAppSelector(state => state.user)

    const matchedUserObj = useMemo(() => {
        return userValue.find(user => user.id === clickedMessageValue.userId)
    }, [clickedMessageValue])

    return (
        <>
            <ModalContentContainer>
                <ModalTitle>
                    메세지 상세정보
                </ModalTitle>
                <ModalTextInputItem name={'메세지'} value={clickedMessageValue.content} readOnly={true} />
                <ModalTextInputItem name={'수신'} value={matchedUserObj!.name} readOnly={true} />
                <ModalTextInputItem name={'발송 날짜'} value={DateFormater('yyyy년 MM월 DD일', clickedMessageValue.date)} readOnly={true} />
                <ModalTextInputItem name={'발송 시간'} value={clickedMessageValue.time} readOnly={true} />
            </ModalContentContainer>

            <ModalButtonsContainer>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
            </ModalButtonsContainer>
        </>
    )
}