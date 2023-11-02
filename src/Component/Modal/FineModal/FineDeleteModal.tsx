import ModalSelectItem from "../ModalInputItem/ModalSelectItem";
import ModalTitle from "../ModalInputItem/ModalTitle";
import ModalContentContainer from "../ModalWrapper/ModalContentContainer";
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer";
import ModalButton from "../ModalInputItem/ModalButton";
import { useMemo, useState } from "react";
import { uniqBy } from "lodash";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks";
import { fineActions } from "../../../store/fine";
import { DateFormater } from "../../../utils/utils";
import type { User } from "../../../store/user";
import type { DeleteFinePayload, Fine } from "../../../store/fine";
import type { ModalFunctionProps } from "../ModalWrapper/Modal";

export default function FineDeleteModal({ ClickQuitHandler }: ModalFunctionProps) {
    const fineValue = useAppSelector(state => state.fine)
    const userValue = useAppSelector(state => state.user)

    const dispatch = useAppDispatch()

    const [selectedUserId, setSelectedUserId] = useState<string>('')
    const [selectedFineId, setSelectedFineId] = useState<string>('')

    const hasFineUsers: any = useMemo(() => {
        GetHasFineUsers(fineValue, userValue)
    }, [fineValue])
    const userFines: Array<Fine> = useMemo(() => {
        return GetUserFine(fineValue, selectedUserId)
    }, [selectedUserId])

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

/**
 * 벌금을 갖고 있는 회원의 이름을 fineOBj과 함께 반환
 * @param fineValue 
 * @param userValue 
 * @returns 
 */
const GetHasFineUsers = (fineValue: Array<Fine>, userValue: Array<User>): any => {
    const returnValue: any = fineValue.map(fine => {
        const matchedUserObj = userValue.find(user => user.id === fine.userId)
        return { ...fine, name: matchedUserObj!.name }
    })
    return returnValue
}

/**
 * 선택한 회원의 벌금 내역을 반환함
 * @param fineValue 
 * @param userId 
 * @returns 
 */
const GetUserFine = (fineValue: Array<Fine>, userId: string): Array<Fine> => {
    return fineValue.filter(fine => fine.userId === userId)
}