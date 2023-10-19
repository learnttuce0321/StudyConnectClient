import Modal from '../Modal/ModalWrapper/Modal'
import { useAppDispatch, useAppSelector } from '../../store/hooks/storeHooks'
import { ModalState, modalActions } from '../../store/modal'
import OtherWrapper from '../Wrapper/OtherWrapper'
import ModalButtonList from '../Modal/ActiveModalButtonWrapper/ModalButtonList'
import ModalButtonItem from '../Modal/ActiveModalButtonWrapper/ModalButtonItem'
import MessageTable from '../Message/MessageTable/MessageTable'

export default function MessagePage() {

    const dispatch = useAppDispatch()
    const modalValue = useAppSelector(state => state.modal)

    const ClickOpenMessageHandler = (): void => {
        dispatch(modalActions.setModalState({ type: ModalState.ADD_MESSAGE }))
    }
    return (
        <>
            <ModalButtonList>
                <ModalButtonItem onClick={ClickOpenMessageHandler}>메세지</ModalButtonItem>
            </ModalButtonList>

            <OtherWrapper>
                <MessageTable />
            </OtherWrapper>

            {
                modalValue.type !== ModalState.NONE && <Modal />
            }
        </>
    )
}
