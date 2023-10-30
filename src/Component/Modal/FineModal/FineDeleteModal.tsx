import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks";
import ModalSelectItem from "../ModalInputItem/ModalSelectItem";
import ModalTitle from "../ModalInputItem/ModalTitle";
import { ModalFunctionProps } from "../ModalWrapper/Modal";
import ModalContentContainer from "../ModalWrapper/ModalContentContainer";
import { uniqBy } from "lodash";
import { DeleteFinePayload, Fine, fineActions } from "../../../store/fine";
import { User } from "../../../store/user";
import { DateFormater } from "../../../utils/utils";
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer";
import ModalButton from "../ModalInputItem/ModalButton";
import axios from "axios";

export default function FineDeleteModal({ ClickQuitHandler }: ModalFunctionProps) {
    const dispatch = useAppDispatch()

    const userValue = useAppSelector(state => state.user)
    const fineValue = useAppSelector(state => state.fine)

    const [selectedUserId, setSelectedUserId] = useState<string>('')
    const [selectedFineId, setSelectedFineId] = useState<string>('')

    const hasFineUsers: any = GetHasFineUsers(fineValue, userValue)
    const userFines: Array<Fine> = GetUserFine(fineValue, selectedUserId)

    const ClickuserIdHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedUserId(e.target!.value)
    }
    const ClickFineIdHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedFineId(e.target!.value)
    }

    const ClickDeleteHandler = async (): Promise<any> => {
        if (window.confirm('정말 삭제하시겠습니까?')) {

            const result = await axios({
                method: 'DELETE',
                url: 'fine/delete',
                data: {
                    id: selectedFineId
                }
            })

            if (result.data.result) {
                const deleteFinePayload: DeleteFinePayload = {
                    id: selectedFineId
                }
                dispatch(fineActions.DeleteFine(deleteFinePayload))
            }
        }

        setSelectedFineId('')
        setSelectedUserId('')
        ClickQuitHandler()
    }

    return (
        <>
            <ModalContentContainer>
                <ModalTitle>벌금 내역 삭제</ModalTitle>
                <ModalSelectItem name={"이름"} onChange={ClickuserIdHandler}>
                    <option value={''}>선택</option>
                    {
                        uniqBy(hasFineUsers, 'userId').map((fine: any) => <option key={fine.userId} value={fine.userId}>{fine.name}</option>)
                    }
                </ModalSelectItem>
                {
                    selectedUserId.trim().length ? (
                        <ModalSelectItem name={"기한"} onChange={ClickFineIdHandler}>
                            <option value={''}>선택</option>
                            {
                                userFines.map(userFine => <option key={userFine.id} value={userFine.id}>{DateFormater('yyyy년 MM월 DD일', userFine.deadLine)}</option>)
                            }
                        </ModalSelectItem>
                    ) : null
                }
            </ModalContentContainer>

            <ModalButtonsContainer>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
                {
                    selectedFineId.trim().length ? <ModalButton onClick={ClickDeleteHandler}>삭제하기</ModalButton> : null
                }
            </ModalButtonsContainer>
        </>
    )
}

const GetHasFineUsers = (fineValue: Array<Fine>, userValue: Array<User>): any => {
    const returnValue: any = fineValue.map(fine => {
        const matchedUserObj = userValue.find(user => user.id === fine.userId)
        return { ...fine, name: matchedUserObj!.name }
    })
    return returnValue
}

const GetUserFine = (fineValue: Array<Fine>, userId: string): Array<Fine> => {
    return fineValue.filter(fine => fine.userId === userId)
}