import { uniqBy } from "lodash";
import ModalSelectItem from "../ModalInputItem/ModalSelectItem";
import ModalTitle from "../ModalInputItem/ModalTitle";
import { ModalFunctionProps } from "../ModalWrapper/Modal";
import ModalContentContainer from "../ModalWrapper/ModalContentContainer";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks/storeHooks";
import { Fine, ModifyFinePayload, fineActions } from "../../../store/fine";
import { User } from "../../../store/user";
import { DateFormater } from "../../../utils/utils";
import ModalTextInputItem from "../ModalInputItem/ModalTextInputItem";
import ModalButtonsContainer from "../ModalWrapper/ModalButtonsContainer";
import ModalButton from "../ModalInputItem/ModalButton";

export default function FineModifyModal({ ClickQuitHandler }: ModalFunctionProps) {
    const dispatch = useAppDispatch()

    const userValue = useAppSelector(state => state.user)
    const fineValue = useAppSelector(state => state.fine)

    const [selectedUserId, setSelectedUserId] = useState<string>('')
    const [selectedFineId, setSelectedFineId] = useState<string>('')
    const selectedFineObj: (Fine | undefined) = fineValue.find(fine => fine.id === selectedFineId)

    const hasFineUsers: any = GetHasFineUsers(fineValue, userValue)
    const userFines: Array<Fine> = GetUserFine(fineValue, selectedUserId)

    const fineRef = useRef<HTMLInputElement>(null)
    const deadLineRef = useRef<HTMLInputElement>(null)

    const ClickuserIdHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedUserId(e.target!.value)
    }
    const ClickFineIdHandler = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        setSelectedFineId(e.target!.value)
    }

    const ClickModifyHandler = (): void => {
        if (window.confirm('수정하시겠습니까?')) {
            const fineInput = fineRef.current
            const deadLineInput = deadLineRef.current

            const modifyFinePayload: ModifyFinePayload = {
                id: selectedFineId,
                deadLine: deadLineInput!.value,
                fine: parseInt(fineInput!.value)
            }
            dispatch(fineActions.ModifyFine(modifyFinePayload))
        }
        ClickQuitHandler()
    }
    return (
        <>
            <ModalContentContainer>
                <ModalTitle>벌금 내역 수정</ModalTitle>
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
                {
                    selectedFineObj ? (
                        <>
                            <ModalTextInputItem name="벌금" ref={fineRef} defaultValue={selectedFineObj.fine.toString()} />
                            <ModalTextInputItem name="기한" ref={deadLineRef} defaultValue={selectedFineObj.deadLine} />
                        </>
                    ) : null
                }
            </ModalContentContainer>

            <ModalButtonsContainer>
                <ModalButton onClick={ClickQuitHandler}>닫기</ModalButton>
                <ModalButton onClick={ClickModifyHandler}>수정하기</ModalButton>
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
