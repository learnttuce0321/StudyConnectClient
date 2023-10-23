import ModalButtonItem from "../Modal/ActiveModalButtonWrapper/ModalButtonItem";
import ModalButtonList from "../Modal/ActiveModalButtonWrapper/ModalButtonList";
import OtherWrapper from "../Wrapper/OtherWrapper";
import { useAppDispatch } from "../../store/hooks/storeHooks";
import { ModalState, modalActions } from "../../store/modal";
import FineTable from "../Fine/FineTable/FineTable";

export default function FinePage() {

    const dispatch = useAppDispatch()

    const ClickAddFineHandler = (): void => {
        dispatch(modalActions.setModalState({ type: ModalState.ADD_FINE }))
    }
    const ClickDelteFineHandler = (): void => {
        dispatch(modalActions.setModalState({ type: ModalState.DELETE_FINE }))
    }
    const ClickModifyFineHandler = (): void => {
        dispatch(modalActions.setModalState({ type: ModalState.MODIFY_FINE }))
    }
    return (
        <>
            <ModalButtonList>
                <ModalButtonItem onClick={ClickAddFineHandler}>추가하기</ModalButtonItem>
                <ModalButtonItem onClick={ClickDelteFineHandler}>삭제하기</ModalButtonItem>
                <ModalButtonItem onClick={ClickModifyFineHandler}>수정하기</ModalButtonItem>
            </ModalButtonList>

            <OtherWrapper>
                <FineTable />
            </OtherWrapper>

        </>
    )
}